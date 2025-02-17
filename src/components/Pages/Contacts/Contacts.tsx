import React, { useState } from "react";
import styles from "./Contacts.module.css";
import { FaVk, FaTelegram, FaWhatsapp } from "react-icons/fa";
import Form from "../../Form/Form";
import Modal from "../../Modal/Modal";
import QRButton from "../../QRButton/QRButton";

interface FormValues {
  name: string;
  phone: string;
}

const Contacts: React.FC = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleFormSubmit = (data: FormValues) => {
    console.log("Форма отправлена", data);
    setIsModalActive(true);
  };

  return (
    <section className={styles.contacts} id="contacts">
      <div className={styles.contactsForm}>
        <Form
          className={styles.leftAlignedForm}
          title="Как с нами связаться?"
          description="Заполните форму и мы свяжемся с вами в течение часа"
          buttonText="Заказать звонок"
          onSubmit={handleFormSubmit}
        />
      </div>
      <div className={styles.contactsBox}>
        <div className={styles.mapBox}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Af1acffdb690f3121d88ff8964d19c8274070efe56fa520b5aaf69e0e72eea18a&amp;source=constructor"
            className={styles.map}
          ></iframe>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
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
        <QRButton />
      </div>
      <Modal active={isModalActive} setActive={setIsModalActive}>
        <div className={styles.thankYouMessage}>
          <h3>Спасибо за обращение!</h3>
          <div className={styles.modalImage}>
            <img
              className={styles.modalImage}
              src="src\images\thank-you.svg"
              alt="Thank You"
            />
          </div>
          <p>Ожидайте сообщение от нашего менеджера</p>
        </div>
      </Modal>
    </section>
  );
};

export default Contacts;
