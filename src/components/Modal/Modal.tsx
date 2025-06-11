// src/components/Modal/Modal.jsx
import React from 'react';
import ReactDOM from 'react-dom'; // Импортируем ReactDOM
import './Modal.scss';

type Props = {
  isOpen: any,
  onClose: any,
  children: any,
}

const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    console.error("Элемент #modal-root не найден в DOM. Портал не будет работать.");
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Add a new film</h3>
          <button className="modal-close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>,
    modalRoot 
  );
};

export default Modal;