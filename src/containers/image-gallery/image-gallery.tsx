import { useState } from "react";
import { Modal } from "@/components/image-gallery/modal/modal.tsx";
import ImageGalleryStyles from "./image-gallery.module.scss";
import Image1 from "@/assets/1.jpg";
import Image2 from "@/assets/2.jpg";
import Image3 from "@/assets/3.jpg";
import Image4 from "@/assets/4.jpg";
import Image5 from "@/assets/5.jpg";
import Image6 from "@/assets/6.jpg";
import Image7 from "@/assets/7.jpg";
import Image8 from "@/assets/8.jpg";

export const ImageGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
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
