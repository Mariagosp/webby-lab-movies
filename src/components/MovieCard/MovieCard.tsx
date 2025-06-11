import type { MovieType } from "../../types/MovieType";
import "./MovieCard.scss";

type Props = {
  movie: MovieType;
};

export const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <li className="card">
      <div>
        <h2 className="card__title">{movie.title}</h2>
        <p className="card__text">
          <span>Release Year:</span> {movie.releaseYear}
        </p>
        <p className="card__format">
          <span>Format:</span> {movie.format}
        </p>{" "}
        <div className="actors-list-container">
          <span>Actors:</span>
          <ul>
            {movie.actors.map((actor, index) => (
              <li key={index}>{actor}</li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};
