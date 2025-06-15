import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./Input.scss";
import Close from '../../assets/close.svg?react';
import Search from '../../assets/Search.svg?react';
export const Input = ({ query, handleSetInput, handleSubmit, handleClearQuery, }) => {
    return (_jsx(_Fragment, { children: _jsxs("form", { className: "form", onSubmit: handleSubmit, children: [_jsx(Search, { className: "form__icon" }), _jsx("input", { type: "text", placeholder: "Search", className: "form__input", value: query, onChange: (e) => handleSetInput(e.target.value) }), _jsx("div", { className: "form__close", onClick: handleClearQuery, children: _jsx(Close, {}) })] }) }));
};
