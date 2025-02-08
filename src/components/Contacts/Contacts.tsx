import React from 'react';
import styles from './Contacts.module.css';
import { FaVk, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Contacts: React.FC = () => {
  return (
    <section className={styles.contacts} id="contacts">
      <h2>Контакты</h2>
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