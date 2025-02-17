import React, { useEffect } from "react";
import { aboutData } from "./aboutData";
import styles from "./AboutSection.module.css";

const AboutSection: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            entry.target.classList.remove(styles.hidden);
          } else {
            entry.target.classList.remove(styles.visible);
            entry.target.classList.add(styles.hidden);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      },
    );

    const items = document.querySelectorAll(`.${styles.about_text_item}`);
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className={styles.about}>
      <div className={styles.about_text_container}>
        <h2 className={styles.about_title}>{aboutData.title}</h2>
        <div className={styles.about_text}>
          <ul className={styles.about_text_list}>
            {aboutData.items.map((item, index) => (
              <li
                key={index}
                className={`${styles.about_text_item} ${styles.hidden}`}
              >
                <p className={styles.about_text_item_text}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
