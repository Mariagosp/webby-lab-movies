import type { MovieWithDetails } from "../../types/MovieType";
import "./MovieInfoModal.scss";
type Props = {
    isOpen: boolean;
    onClose: () => void;
    movie: MovieWithDetails;
};
declare const MovieInfoModal: React.FC<Props>;
export default MovieInfoModal;
