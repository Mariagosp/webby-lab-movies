import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./MovieCard.scss";
import { FormatEmojisEnum } from "../../types/MovieType";
import { emojiIcons } from "../../utils/emojiIcons";
import { useState } from "react";
import MovieInfoModal from "../MovieInfoModal/MovieInfoModal";
import { getMovieById } from "../../api/getMovieById.api";
export const MovieCard = ({ movie }) => {
    const icon = FormatEmojisEnum[movie.format];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const Icon = emojiIcons[movie.icon];
    const openModal = async () => {
        try {
            const movieDetails = await getMovieById(movie.id);
            setSelectedMovie(movieDetails.data);
            setIsModalOpen(true);
        }
        catch (error) {
            console.error('GetMovieBuId failed', error);
        }
    };
    const closeModal = () => setIsModalOpen(false);
    return (_jsxs(_Fragment, { children: [_jsxs("li", { className: "card", children: [_jsxs("div", { className: "card__header", children: [_jsxs("div", { className: "card__text", children: [_jsx("h2", { className: "card__title", children: movie.title }), _jsxs("p", { className: "card__text", children: [_jsx("span", { children: "Release Year:" }), " ", movie.releaseYear] }), _jsxs("p", { className: "card__format", children: [_jsx("span", { children: "Format:" }), " ", movie.format, " ", icon] }), " "] }), _jsx(Icon, {})] }), _jsx("button", { className: "card__button", onClick: openModal, children: "Show more" })] }), selectedMovie && (_jsx(MovieInfoModal, { isOpen: isModalOpen, onClose: closeModal, movie: selectedMovie }))] }));
};
