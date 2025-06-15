import { jsx as _jsx } from "react/jsx-runtime";
import './Loader.scss';
import React from "react";
const Loader = () => {
    return (_jsx("div", { className: "loader-wrapper", children: _jsx("div", { className: "loader" }) }));
};
export default Loader;
