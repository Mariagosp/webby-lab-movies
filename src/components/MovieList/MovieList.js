import { jsx as _jsx } from "react/jsx-runtime";
import { MovieCard } from "../MovieCard/MovieCard";
import './MovieList.scss';
export const MovieList = ({ movies }) => {
    return (_jsx("ul", { className: "movie-list", children: movies.map((movie) => (_jsx(MovieCard, { movie: movie }, movie.id))) }));
};
