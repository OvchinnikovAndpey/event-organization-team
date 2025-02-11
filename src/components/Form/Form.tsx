import React from 'react';
import styles from './Form.module.css';

interface FormProps {
  title: string;
  description: string;
  buttonText: string;
  onSubmit: (event: React.FormEvent) => void;
}

const Form: React.FC<FormProps> = ({ title, description, buttonText, onSubmit }) => {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <form onSubmit={onSubmit} className={styles.form}>
        <input type="text" placeholder="Ваше имя" className={styles.input} required />
        <input type="tel" placeholder="+7(999)999-99-99" className={styles.input} required />
        <button type="submit" className={styles.button}>{buttonText}</button>
      </form>
    </div>
  );
};

export default Form;