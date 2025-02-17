import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FaVk, FaTelegram, FaWhatsapp } from "react-icons/fa";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link to="/" className={styles.logo}>
          <img src="/images/logo-only.svg" alt="Логотип Adventure Events" />
        </Link>

        <div
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav
          className={`${styles.navigation} ${isMenuOpen ? styles.active : ``}`}
        >
          <ul className={styles.navList}>
            <li>
              <Link to="/about" onClick={handleLinkClick}>
                О нас
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={handleLinkClick}>
                Наша команда
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={handleLinkClick}>
                Услуги
              </Link>
            </li>
            <li>
              <Link to="/gallerey" onClick={handleLinkClick}>
                Фото с мероприятий
              </Link>
            </li>
            <li>
              <Link to="/contacts" onClick={handleLinkClick}>
                Контакты
              </Link>
            </li>
            <li className={styles.socialLinksContainer}>
              <div className={styles.socialLinks}>
                <a
                  href="https://vk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaVk />
                </a>
                <a
                  href="https://telegram.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegram />
                </a>
                <a
                  href="https://web.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;