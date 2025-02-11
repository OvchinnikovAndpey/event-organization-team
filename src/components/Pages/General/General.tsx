import React, { useState } from 'react';
import styles from './General.module.css';
import Modal from '../../Modal/Modal';
import Form from '../../Form/Form'; // Предполагается, что у вас есть компонент Form

export const General: React.FC = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleOpenModal = () => {
    setIsModalActive(true);
  };

  const handleCloseModal = () => {
    setIsModalActive(false);
  };

  return (
    <div className={styles.background}>
      <div className={styles.general}>
        <h1 className={styles.title}>Мероприятия <br />с индивидуальным подходом</h1>
        <div className={styles.line}>
          <p className={styles.text}>Организуем все под ключ согласно вашим критериям и пожеланиям</p>
        </div>
        <button className={styles.button} onClick={handleOpenModal}>Заказать звонок</button>
      </div>
      <Modal active={isModalActive} setActive={handleCloseModal}>
        <Form
          title="Свяжитесь с нами"
          description="Заполните форму, и мы свяжемся с вами"
          buttonText="Отправить"
          onSubmit={(e) => {
            e.preventDefault();
            // Логика отправки формы
            handleCloseModal();
          }}
        />
      </Modal>
    </div>
  );
};

export default General;