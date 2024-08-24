import { useCallback, useEffect, useRef } from "react";
import ModalStyles from "./modal.module.scss";

type ModalProps = {
  isOpen: boolean;
  image: string;
  setIsModalOpen: (isOpen: boolean) => void;
  handleNavigation: (direction: "prev" | "next") => void;
};

export const Modal = ({
  isOpen,
  image,
  setIsModalOpen,
  handleNavigation,
}: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current) return;

    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  const handleCloseDialogEvent = useCallback(
    (e: MouseEvent) => {
      if (dialogRef.current && e.target === dialogRef.current) {
        setIsModalOpen(false);
        dialogRef.current.close();
      }
    },
    [setIsModalOpen]
  );

  useEffect(() => {
    if (!dialogRef.current) return;
    dialogRef.current?.addEventListener("click", (e) =>
      handleCloseDialogEvent(e)
    );

    return () =>
      dialogRef.current?.removeEventListener("click", (e) =>
        handleCloseDialogEvent(e)
      );
  }, [handleCloseDialogEvent]);

  useEffect(() => {
    const body = document.getElementsByTagName("body")?.[0];
    const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    if (body === null) return;

    if (isOpen) {
      body.style.overflow = "hidden";
      body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      body.style.overflow = "auto";
      body.style.paddingRight = `0px`;
    }

    return () => {
      body.style.overflow = "auto";
      body.style.paddingRight = `0px`;
    };
  }, [isOpen]);

  return (
    <dialog
      role="dialog"
      id="dialog1"
      aria-modal={isOpen ? "true" : "false"}
      aria-describedby="dialog-description"
      className={ModalStyles.dialog}
      ref={dialogRef}
      onClose={() => setIsModalOpen(false)}
    >
      <div className={ModalStyles.dialogContent}>
        <div className={ModalStyles.dialogImageWrapper}>
          <img src={image} alt="" loading="lazy" />
        </div>
        <div className={ModalStyles.dialogNavButtons}>
          <button onClick={() => handleNavigation("prev")}>Prev</button>{" "}
          <button onClick={() => handleNavigation("next")}>Next</button>
        </div>
      </div>
    </dialog>
  );
};
