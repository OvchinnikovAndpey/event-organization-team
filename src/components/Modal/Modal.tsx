import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

interface ModalProps {
  active: boolean;
  setActive: (active: boolean) => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ active, setActive, children }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(false);
      }
    };

    if (active) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [active, setActive]);

  const modalContent = (
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active
            ? `${styles.modalContent} ${styles.active}`
            : styles.modalContent
        }
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={() => setActive(false)}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default Modal;
