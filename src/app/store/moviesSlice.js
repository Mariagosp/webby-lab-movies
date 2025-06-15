import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "../api/fetchMovies";
import { createMovie } from "../api/createMovie";
import { iconKeys } from "../../utils/emojiIcons";
import { removeMovieThunk } from "../api/removeMovie";
import { getRandomIcon } from "../../utils/getRandomIcon";
export const initialState = {
    movies: [],
    moviesWithDetails: [],
    isLoading: false,
    error: "",
};
export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovie: (state, action) => {
            const newMovie = {
                id: Date.now(),
                ...action.payload,
            };
            state.movies.push(newMovie);
        },
        deleteMovie: (state, action) => {
            state.movies = state.movies.filter((movie) => movie.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        })
            .addCase(fetchMovies.fulfilled, (state, action) => {
            state.isLoading = false;
            const incoming = action.payload;
            state.movies = incoming.map((newMovie) => {
                const existing = state.movies.find((m) => m.id === newMovie.id);
                return {
                    ...newMovie,
                    icon: existing?.icon ??
                        iconKeys[Math.floor(Math.random() * iconKeys.length)],
                };
            });
        })
            .addCase(fetchMovies.rejected, (state, action) => {
            state.isLoading = false;
            state.error = String(action.payload || "Smth went wrong");
        })
            .addCase(createMovie.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        })
            .addCase(createMovie.fulfilled, (state, action) => {
            state.isLoading = false;
            const newMovie = {
                id: action.payload.id,
                title: action.payload.title,
                releaseYear: action.payload.year,
                format: action.payload.format,
                icon: getRandomIcon(),
            };
            state.movies.push(newMovie);
        })
            .addCase(createMovie.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload || "Error while creating a movie";
        })
            .addCase(removeMovieThunk.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        })
            .addCase(removeMovieThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.movies = state.movies.filter((movie) => movie.id !== action.payload.status);
        })
            .addCase(removeMovieThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
export const { addMovie, deleteMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
