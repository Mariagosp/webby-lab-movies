import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import "./App.scss";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks/hooks";
import { Header } from "./components/Header/Header";
import { MovieList } from "./components/MovieList/MovieList";
import Modal from "./components/Modal/Modal";
import { Toaster } from "react-hot-toast";
import { fetchMovies } from "./app/api/fetchMovies";
import { CreateMovieModal } from "./components/CreateMovieModal/CreateMovieModal";
import Loader from "./components/Loader/Loader";
function App() {
    const [query, setQuery] = useState("");
    const [sortBy, setSortBy] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const movies = useAppSelector((state) => state.movies.movies);
    const isLoading = useAppSelector((state) => state.movies.isLoading);
    const error = useAppSelector((state) => state.movies.error);
    const dispatch = useAppDispatch();
    const handleSortClick = (value) => {
        if (value === "asc") {
            setSortBy("desc");
            return;
        }
        if (value === "desc") {
            setSortBy(null);
            return;
        }
        if (value === null) {
            setSortBy("asc");
            return;
        }
    };
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    useEffect(() => {
        try {
            const order = sortBy
                ? sortBy.toUpperCase()
                : undefined;
            const sort = order ? "title" : undefined;
            dispatch(fetchMovies({ search: query, order, sort }));
        }
        catch (error) {
            console.error("Error fetching movies:", error);
        }
    }, [query, sortBy]);
    return (_jsxs(_Fragment, { children: [_jsx(Header, { query: query, setQuery: setQuery, handleSortClick: handleSortClick, sortBy: sortBy, onOpenModalClick: openModal }), _jsx("main", { className: "main", children: isLoading ? (_jsx(Loader, {})) : error ? (_jsx("h3", { children: error })) : movies.length === 0 ? (_jsx("h3", { className: "main__empty-title", children: "No movies found... Yet :)" })) : (_jsx(MovieList, { movies: movies })) }), _jsx(Modal, { isOpen: isModalOpen, onClose: closeModal, title: "Add a new film", children: _jsx(CreateMovieModal, { closeModal: closeModal }) }), _jsx(Toaster, { position: "top-right", reverseOrder: false })] }));
}
export default App;
