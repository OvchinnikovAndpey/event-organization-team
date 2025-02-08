import React from 'react';
import styles from './Services.module.css';

const Services: React.FC = () => {
  return (
    <section className={styles.lots}>
      <h2 id="lots-view" className={styles.heading}>лоты</h2>
      <ul className={styles.cardList}>
        <li className={styles.cardListItem}>
          <a href="#" className={styles.cardLink}>
            <article className={`${styles.card} ${styles.cardTypeFilm}`}>
              <div className={styles.overlay}></div>
              <h2 className={styles.cardTitle}>Фильм режиссёра, который бросил киношколу</h2>
              <p className={styles.cardText}>
                Не просто бросил, а ушёл с первой лекции. Какой была бы ваша ставка, если бы вы не знали, что режиссёр — Пол Томас Андерсон?
              </p>
            </article>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Services;
