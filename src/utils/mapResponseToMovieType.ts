import type { ResponseMovieType } from '../types/ResponseMovieType';
import type { MovieType } from "../types/MovieType";
import { iconKeys } from "./emojiIcons";

export const mapResponseToMovieType = (
  data: ResponseMovieType[]
): Omit<MovieType, "actors">[] => {
  return data.map((movie) => ({
    id: movie.id,
    title: movie.title,
    releaseYear: movie.year,
    format: movie.format as MovieType["format"],
    icon: iconKeys[Math.floor(Math.random() * iconKeys.length)],
  }));
};