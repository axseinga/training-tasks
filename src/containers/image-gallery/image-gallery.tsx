import { useState } from "react";
import { Modal } from "@/components/image-gallery/modal/modal.tsx";
import ImageGalleryStyles from "./image-gallery.module.scss";

export const ImageGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "./src/assets/1.jpg",
    "./src/assets/2.jpg",
    "./src/assets/3.jpg",
    "./src/assets/4.jpg",
    "./src/assets/5.jpg",
    "./src/assets/6.jpg",
    "./src/assets/7.jpg",
    "./src/assets/8.jpg",
  ];

  const handleNavigation = (direction: "prev" | "next") => {
    if (direction === "next") {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex((prev) => prev + 1);
      }
    } else {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex((prev) => prev - 1);
      }
    }
  };

  return (
    <>
      <div className={ImageGalleryStyles.gallery}>
        <h1>Image Gallery</h1>
        <div>
          {images.map((image, index) => (
            <button
              key={`${index}`}
              onClick={() => {
                setIsModalOpen((prev) => !prev);
                setImageIndex(index);
              }}
            >
              <img src={image} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        image={images[imageIndex]}
        setIsModalOpen={setIsModalOpen}
        handleNavigation={handleNavigation}
      />
    </>
  );
};
