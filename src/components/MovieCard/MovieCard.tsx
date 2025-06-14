import "./MovieCard.scss";
import { FormatEmojisEnum, type MovieType, type MovieWithDetails } from "../../types/MovieType";
import { emojiIcons } from "../../utils/emojiIcons";
import { useState } from "react";
import MovieInfoModal from "../MovieInfoModal/MovieInfoModal";
import { getMovieById } from "../../api/getMovieById.api";

type Props = {
  movie: MovieType | Omit<MovieType, "actors">;
};

export const MovieCard: React.FC<Props> = ({ movie }) => {
  const icon = FormatEmojisEnum[movie.format];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<MovieWithDetails | null>(null);

  const Icon = emojiIcons[movie.icon];

  const openModal = async () => {
    try {
      const movieDetails = await getMovieById(movie.id);
      console.log('movieDetails', movieDetails.data)
      setSelectedMovie(movieDetails.data);
      setIsModalOpen(true)
    } catch (error) {
      console.error('GetMovieBuId failed', error);
    }
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <li className="card">
        <div className="card__header">
          <div className="card__text">
            <h2 className="card__title">{movie.title}</h2>
            <p className="card__text">
              <span>Release Year:</span> {movie.releaseYear}
            </p>
            <p className="card__format">
              <span>Format:</span> {movie.format} {icon}
            </p>{" "}
          </div>
          <Icon />
        </div>
        <button className="card__button" onClick={openModal}>Show more</button>
      </li>

      {selectedMovie && (
        <MovieInfoModal isOpen={isModalOpen} onClose={closeModal} movie={selectedMovie} />
      )}
    </>
  );
};
