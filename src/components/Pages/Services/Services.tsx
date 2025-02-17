import React from "react";
import styles from "./Services.module.css";
import { ServicesData } from "./ServicesData";

const Services: React.FC = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <section className={styles.lots}>
      <h2 id="lots-view" className={styles.heading}>
        В данном разделе вы можете выбрать необходимые услуги и получить по ним
        консультацию
      </h2>
      <ul className={styles.cardList}>
        {ServicesData.map((service) => (
          <li key={service.id} className={styles.cardListItem}>
            <a href="#" className={styles.cardLink} onClick={handleClick}>
              <article className={styles.card}>
                <img
                  src={service.photo}
                  alt={service.about}
                  className={styles.cardImage}
                />
                <div className={styles.overlay}>
                  <h2 className={styles.cardTitle}>{service.about}</h2>
                  <p className={styles.cardText}>{service.description}</p>
                </div>
              </article>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
