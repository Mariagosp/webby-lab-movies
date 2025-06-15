import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./Header.scss";
import { Input } from "../Input/Input";
import ArrowUp from '../../assets/arrowUp.svg?react';
import ArrowDown from "../../assets/arrowDown.svg?react";
import Close from "../../assets/close.svg?react";
import Plus from '../../assets/plus.svg?react';
export const Header = ({ query, setQuery, handleSortClick, sortBy, onOpenModalClick }) => {
    const handleClearQuery = () => {
        setQuery("");
    };
    const handleSetInput = (value) => {
        setQuery(value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setQuery("");
    };
    return (_jsx(_Fragment, { children: _jsxs("header", { className: "header", children: [_jsx("h2", { className: "header__title", children: "MoviesList" }), _jsxs("div", { className: "container", children: [sortBy === null ? (_jsx(ArrowUp, { onClick: () => handleSortClick(null) })) : sortBy === "asc" ? (_jsx(ArrowDown, { onClick: () => handleSortClick('asc') })) : (_jsx(Close, { color: "white", onClick: () => handleSortClick('desc') })), _jsx(Plus, { onClick: onOpenModalClick, className: "header__plus" }), _jsx(Input, { query: query, handleSetInput: handleSetInput, handleSubmit: handleSubmit, handleClearQuery: handleClearQuery })] })] }) }));
};
