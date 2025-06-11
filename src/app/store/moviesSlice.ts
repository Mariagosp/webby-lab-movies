import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MovieType } from "../../types/MovieType";

type MoviesState = {
  movies: MovieType[],
  moviesList: string[],
  isLoading: boolean,
  error: string,
}

const initialState: MoviesState = {
  movies: [] as MovieType[],
  moviesList: [] as string[],
  isLoading: false,
  error: '',
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<MovieType[]>) => {
      return {
        ...state,
        movies: action.payload,
      }
    },
    addMovie: (state, action: PayloadAction<Omit<MovieType, 'id'>>) => {
      const newMovie = {
        id: Date.now(),
        ...action.payload
      }

      state.movies.push(newMovie);
    },

    deleteMovie: (state, action: PayloadAction<number>) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload);
    },

    addNewMovie: (state, action: PayloadAction<string>) => {
      state.moviesList.push(action.payload);
    }
  }
})

export const { setMovies, addMovie, deleteMovie, addNewMovie } = moviesSlice.actions;
export default moviesSlice.reducer;