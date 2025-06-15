import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import toast from "react-hot-toast";
import Modal from "../Modal/Modal";
import "./MovieInfoModal.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { removeMovieThunk } from "../../app/api/removeMovie";
import { fetchMovies } from "../../app/api/fetchMovies";
const MovieInfoModal = ({ isOpen, onClose, movie }) => {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector((state) => state.movies.isLoading);
    const handleDeleteMovie = async () => {
        try {
            await dispatch(removeMovieThunk(movie.id));
            toast.success("🎬 Film has been removed successfully");
            await dispatch(fetchMovies({}));
            onClose();
        }
        catch (error) {
            toast.error("Something went wrong while removind a film");
        }
    };
    return (_jsx(Modal, { isOpen: isOpen, onClose: onClose, title: `🎬 ${movie.title}`, children: _jsxs("div", { className: "movie__info--modal", children: [_jsxs("div", { className: "movie__info--grid", children: [_jsxs("p", { children: [_jsx("span", { className: "movie__info--grid--span", children: "\uD83D\uDCC5 Release Year:" }), " ", movie.year] }), _jsxs("p", { children: [_jsx("span", { className: "movie__info--grid--span", children: "\uD83D\uDCBF Format:" }), " ", movie.format] })] }), _jsxs("div", { className: "movie__info--actors", children: [_jsx("h3", { className: "movie__info--actors--title", children: "\uD83C\uDF1F Main Cast:" }), _jsx("ul", { className: "movie__info--actors--list", children: movie.actors?.map(({ ...actor }) => (_jsxs("li", { className: "movie__info--actors--list--item", children: ["\u2B50 ", actor.name] }, actor.id))) })] }), _jsx("button", { className: "movie__info--delete-button", onClick: handleDeleteMovie, children: isLoading ? 'Removing...' : 'Delete movie' })] }) }));
};
export default MovieInfoModal;
