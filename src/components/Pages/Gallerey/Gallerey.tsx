import React from "react";
import styles from "./Gallerey.module.css";
import { GallereyData } from "./GallereyData";

const ImageGrid: React.FC = () => {
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
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
