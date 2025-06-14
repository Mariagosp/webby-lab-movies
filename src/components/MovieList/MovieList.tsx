import type { MovieWithIcon } from "../../types/MovieType";
import { MovieCard } from "../MovieCard/MovieCard";
import './MovieList.scss';

type Props = {
  movies: MovieWithIcon[];
}

export const MovieList: React.FC<Props> = ({ movies }) => {
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
