import { type PayloadAction } from "@reduxjs/toolkit";
import type { MovieType, MovieWithDetails, MovieWithIcon } from "../../types/MovieType";
export type MoviesState = {
    movies: MovieWithIcon[];
    moviesWithDetails: MovieWithDetails[];
    isLoading: boolean;
    error: string;
};
export declare const initialState: MoviesState;
export declare const moviesSlice: import("@reduxjs/toolkit").Slice<MoviesState, {
    addMovie: (state: import("immer").WritableDraft<MoviesState>, action: PayloadAction<Omit<MovieType, "id">>) => void;
    deleteMovie: (state: import("immer").WritableDraft<MoviesState>, action: PayloadAction<number>) => void;
}, "movies", "movies", import("@reduxjs/toolkit").SliceSelectors<MoviesState>>;
export declare const addMovie: import("@reduxjs/toolkit").ActionCreatorWithPayload<Omit<MovieType, "id">, "movies/addMovie">, deleteMovie: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "movies/deleteMovie">;
declare const _default: import("redux").Reducer<MoviesState>;
export default _default;
