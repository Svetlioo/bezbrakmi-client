import { ReactNode } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
  filterOptionName: string;
}

const Modal = ({ children, onClose, isOpen, filterOptionName }: ModalProps) => (
  <div
    className={`${styles.modalOverlay} ${
      isOpen ? `${styles.active} ${styles["hide-scroll"]}` : ""
    }`}
    onClick={onClose}
  >
    <div
      className={`${styles.modalContent} ${isOpen ? styles.active : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className={styles.heading}>{filterOptionName}</h2>
      <div className={styles.container}>{children}</div>
      <button className={styles.readyButton} onClick={onClose}>
        &#10004; Потвърди
      </button>
    </div>
  </div>
);

export default Modal;
