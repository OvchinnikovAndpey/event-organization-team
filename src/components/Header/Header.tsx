import React from 'react';
import styles from './Header.module.css';
import { FaVk, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img src='src/images/logo.png' alt="Логотип Adventure Events" />
        </div>
        
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li><a href="#about">О нас</a></li>
            <li><a href="#team">Наша команда</a></li>
            <li><a href="#services">Услуги</a></li>
            <li><a href="#photo">Фото с мероприятий</a></li>
            <li><a href="#contacts">Контакты</a></li>
          </ul>
        </nav>

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
      </div>
    </header>
  );
};

export default Header;