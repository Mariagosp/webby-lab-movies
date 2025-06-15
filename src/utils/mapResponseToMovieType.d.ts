import type { ResponseMovieType } from '../types/ResponseMovieType';
import type { MovieType } from "../types/MovieType";
export declare const mapResponseToMovieType: (data: ResponseMovieType[]) => Omit<MovieType, "actors">[];
