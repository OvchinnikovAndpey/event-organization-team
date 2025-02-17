import React, { useState, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import styles from './QRButton.module.css';

const QRButton: React.FC = () => {
  const [showQR, setShowQR] = useState(false);
  const qrRef = useRef<SVGSVGElement>(null);
  const currentURL = window.location.href;

  const handleShare = async () => {
    if (!qrRef.current) return;

    try {
      const svgData = new XMLSerializer().serializeToString(qrRef.current);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = async () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);

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
      };

      img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
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
            <QRCodeSVG 
              ref={qrRef}
              value={currentURL} 
              size={256}
              level="H"
              includeMargin={true}
            />
            <p>Отсканируйте QR-код для перехода на сайт</p>
          </div>
        </div>
      )}
    </>
  );
};

export default QRButton;
