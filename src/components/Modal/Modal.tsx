import React from "react";
import ReactDOM from "react-dom"; 
import "./Modal.scss";

type Props = {
  isOpen: any;
  onClose: any;
  children: any;
  title?: string;
};

const Modal: React.FC<Props> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) {
    console.error(
      "Элемент #modal-root не найден в DOM. Портал не будет работать."
    );
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>

      <div className="modal__header">
            <h3 className="modal__title">{title}</h3>
            <button className="modal__close" onClick={onClose}>
              &times;
            </button>
          </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
