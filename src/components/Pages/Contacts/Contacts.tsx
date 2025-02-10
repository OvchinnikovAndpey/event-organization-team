import React from 'react';
import styles from './Contacts.module.css';
import { FaVk, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Contacts: React.FC = () => {
  return (
    <section className={styles.contacts} id="contacts">
      <h2 className={styles.title}>Контакты</h2>
      <div className={styles.mapBox}>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af1acffdb690f3121d88ff8964d19c8274070efe56fa520b5aaf69e0e72eea18a&amp;source=constructor" width="90%" height="500" frameBorder="0" className={styles.map}></iframe>
      </div>
      <div className={styles.socialLinks}>
          <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
            <FaVk />
          </a>  
          <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
            <FaTelegram />
          </a>
          <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
    </section>
  );
};

export default Contacts;