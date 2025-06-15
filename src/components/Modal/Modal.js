import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";
const Modal = ({ isOpen, onClose, children, title }) => {
    if (!isOpen)
        return null;
    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot) {
        console.error("Элемент #modal-root не найден в DOM. Портал не будет работать.");
        return null;
    }
    return ReactDOM.createPortal(_jsx("div", { className: "modal__overlay", onClick: onClose, children: _jsxs("div", { className: "modal__content", onClick: (e) => e.stopPropagation(), children: [_jsxs("div", { className: "modal__header", children: [_jsx("h3", { className: "modal__title", children: title }), _jsx("button", { className: "modal__close", onClick: onClose, children: "\u00D7" })] }), _jsx("div", { className: "modal__body", children: children })] }) }), modalRoot);
};
export default Modal;
