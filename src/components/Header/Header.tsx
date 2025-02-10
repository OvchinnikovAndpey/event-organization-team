import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { FaVk, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img src='src/images/logo-only.svg' alt="Логотип Adventure Events" />
        </div>
        
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/team">Наша команда</Link></li>
            <li><Link to="/services">Услуги</Link></li>
            <li><Link to="/photo">Фото с мероприятий</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
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