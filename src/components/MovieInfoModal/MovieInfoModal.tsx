import toast from "react-hot-toast";
import type { MovieWithDetails } from "../../types/MovieType";
import Modal from "../Modal/Modal";
import "./MovieInfoModal.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { removeMovieThunk } from "../../app/api/removeMovie";
import { fetchMovies } from "../../app/api/fetchMovies";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  movie: MovieWithDetails;
};

const MovieInfoModal: React.FC<Props> = ({ isOpen, onClose, movie }) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.movies.isLoading); 

  const handleDeleteMovie = async () => {
    try {
      await dispatch(removeMovieThunk(movie.id));
      toast.success("🎬 Film has been removed successfully");
      await dispatch(fetchMovies({}));
      onClose();
    } catch (error) {
      toast.error("Something went wrong while removind a film");
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`🎬 ${movie.title}`}>
      <div className="movie__info--modal">
        <div className="movie__info--grid">
          <p>
            <span className="movie__info--grid--span">📅 Release Year:</span> {movie.year}
          </p>
          <p>
            <span className="movie__info--grid--span">💿 Format:</span> {movie.format}
          </p>
        </div>

        <div className="movie__info--actors">
          <h3 className="movie__info--actors--title">🌟 Main Cast:</h3>
          <ul className="movie__info--actors--list">
            {movie.actors?.map(({ ...actor }) => (
              <li className="movie__info--actors--list--item" key={actor.id}>⭐ {actor.name}</li>
            ))}
          </ul>
        </div>

        <button className="movie__info--delete-button" onClick={handleDeleteMovie}>
          {isLoading ? 'Removing...' : 'Delete movie'}
        </button>
      </div>
    </Modal>
  );
};

export default MovieInfoModal;
