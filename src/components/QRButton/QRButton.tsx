import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import Modal from '../Modal/Modal';
import styles from './QRButton.module.css';

const QRButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const baseURL = "https://event-organization-team.netlify.app";
  const fullURL = baseURL + window.location.pathname;

  return (
    <>
      <button className={styles.qrButton} onClick={() => setIsModalOpen(true)}>
        QR-код на наш сайт
      </button>

      <Modal active={isModalOpen} setActive={setIsModalOpen}>
        <div className={styles.qrContainer}>
          <QRCodeSVG
            value={fullURL}
            size={256}
            level="H"
            includeMargin={true}
            bgColor="#ffffff"
            fgColor="#000000"
          />
          <p>Отсканируйте QR-код для перехода на сайт, либо сделайте скриншот экрана и поделитесь с друзьями</p>
        </div>
      </Modal>
    </>
  );
};

export default QRButton;