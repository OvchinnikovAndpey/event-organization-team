import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import styles from './QRButton.module.css';

const QRButton: React.FC = () => {
  const [showQR, setShowQR] = useState(false);
  const currentURL = window.location.href;

  const handleShare = async () => {
    try {
      const canvas = document.createElement('canvas');
      const qrCode = document.querySelector('svg');
      
      if (qrCode) {
        const svgData = new XMLSerializer().serializeToString(qrCode);
        const img = new Image();
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);

        img.onload = async () => {
          const context = canvas.getContext('2d');
          if (context) {
            context.drawImage(img, 0, 0);
            canvas.toBlob(async (blob) => {
              if (blob) {
                const shareData = {
                  title: 'QR код сайта',
                  text: 'Отсканируйте QR код для перехода на сайт',
                  files: [new File([blob], 'qr-code.png', { type: 'image/png' })]
                };

                if (navigator.share && navigator.canShare(shareData)) {
                  await navigator.share(shareData);
                } else {
                  setShowQR(true);
                }
              }
            }, 'image/png');
          }
        };
      }
    } catch (error) {
      console.log('Ошибка при шаринге:', error);
      setShowQR(true);
    }
  };

  return (
    <>
      <button className={styles.qrButton} onClick={handleShare}>
        Поделиться QR-кодом
      </button>

      {showQR && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button 
              className={styles.closeButton}
              onClick={() => setShowQR(false)}
            >
              ✕
            </button>
            <QRCodeSVG value={currentURL} size={256} />
            <p>Отсканируйте QR-код для перехода на сайт</p>
          </div>
        </div>
      )}
    </>
  );
};

export default QRButton;
