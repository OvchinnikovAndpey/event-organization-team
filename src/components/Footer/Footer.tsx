import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2023 Организация мероприятий. Все права защищены.</p>
    </footer>
  );
};

export default Footer;