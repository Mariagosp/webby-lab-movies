import "./MovieCard.scss";
import { type MovieType } from "../../types/MovieType";
type Props = {
    movie: MovieType | Omit<MovieType, "actors">;
};
export declare const MovieCard: React.FC<Props>;
export {};
