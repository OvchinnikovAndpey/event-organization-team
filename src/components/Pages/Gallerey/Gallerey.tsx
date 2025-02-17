import React, { useState } from "react";
import styles from "./Gallerey.module.css";
import { GallereyData } from "./GallereyData";
import Modal from "../../Modal/Modal";

const ImageGrid: React.FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setModalActive(true);
  };

  return (
    <div className={styles.card__block}>
      <h1 className={styles.title}>Галлерея фотографий с мероприятий</h1>
      <div className={styles.image__card}>
        {GallereyData.map((image, index) => (
          <img
            key={index}
            src={image.thumbnail}
            alt={image.description}
            loading="lazy"
            className={styles.section__image}
            onClick={() => handleImageClick(image.thumbnail)}
          />
        ))}
      </div>

      <Modal active={modalActive} setActive={setModalActive}>
        <img src={selectedImage} alt="Selected" className={styles.modalImage} />
      </Modal>
    </div>
  );
};

export default ImageGrid;
