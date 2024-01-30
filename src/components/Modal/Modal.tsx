import { ReactNode, useEffect } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
  filterOptionName: string;
  forceScroll?: boolean;
}

const Modal = ({
  children,
  onClose,
  isOpen,
  filterOptionName,
  forceScroll = false,
}: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.classList.add("no-scroll");
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`${styles["modal-overlay"]} ${
        isOpen ? `${styles.active} ${styles["hide-scroll"]}` : ""
      }`}
      onClick={onClose}
    >
      <div
        className={`${styles["modal-content"]} ${isOpen ? styles.active : ""} ${
          forceScroll ? styles["force-scroll"] : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={styles.heading}>{filterOptionName}</h2>
        <div className={styles.container}>{children}</div>
        <button className={styles["ready-button"]} onClick={onClose}>
          &#10004; Потвърди
        </button>
      </div>
    </div>
  );
};

export default Modal;
