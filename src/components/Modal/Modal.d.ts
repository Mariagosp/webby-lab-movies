import React from "react";
import "./Modal.scss";
type Props = {
    isOpen: any;
    onClose: any;
    children: any;
    title?: string;
};
declare const Modal: React.FC<Props>;
export default Modal;
