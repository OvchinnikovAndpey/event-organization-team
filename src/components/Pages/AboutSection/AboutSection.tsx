import React from "react";
import { aboutData } from "./aboutData";
import styles from "./AboutSection.module.css";

const AboutSection: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about_text_container}>
        <h2 className={styles.about_title}>{aboutData.title}</h2>
        <div className={styles.about_text}>
          <ul className={styles.about_text_list}>
            {aboutData.items.map((item, index) => (
              <li key={index} className={styles.about_text_item}>
                <p className={styles.about_text_item_text}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className={styles.about_logo}>
    <img src='src/images/logo-only.svg' alt="Логотип Adventure Events" />
  </div> */}
    </section>
  );
};

export default AboutSection;
