import React from 'react';
import styles from './Form.module.css';
import { FaVk, FaTelegram, FaWhatsapp } from 'react-icons/fa';

interface FormProps {
  className?: string;
  title: string;
  description: string;
  buttonText: string;
  onSubmit: (event: React.FormEvent) => void;
  socialImages?: string[];
  socialText?: string;
}

const Form: React.FC<FormProps> = ({ title, description, buttonText, onSubmit, className, socialImages, socialText }) => {
  return (
    <div className={`${styles.formContainer} ${className || ''}`}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <form onSubmit={onSubmit} className={styles.form}>
        <input type="text" placeholder="Ваше имя" className={styles.input} required />
        <input type="tel" placeholder="+7(999)999-99-99" className={styles.input} required />
        <button type="submit" className={styles.button}>{buttonText}</button>
      </form>
      {socialText && <p className={styles.socialText}>{socialText}</p>}
      {socialImages && (
        <div className={styles.socialImages}>
          {socialImages.map((src, index) => (
            <img key={index} src={src} alt={`Social ${index}`} className={styles.socialImage} />
          ))}
        </div>
      )}
      {socialImages && (
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
      )}
    </div>
  );
};

export default Form;