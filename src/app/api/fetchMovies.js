import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { mapResponseToMovieType } from "../../utils/mapResponseToMovieType";
import { API_URL } from "../../shared/config";
const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async ({ search, order, sort, }, { rejectWithValue }) => {
    try {
        const params = new URLSearchParams();
        if (search)
            params.append("search", search);
        if (sort)
            params.append("sort", sort);
        if (order)
            params.append("order", order);
        const response = await axios.get(`${API_URL}?${params.toString()}`, {
            headers: {
                Authorization: `${AUTH_TOKEN}`,
            },
        });
        const newMoviesList = mapResponseToMovieType(response.data.data);
        return newMoviesList;
    }
    catch (error) {
        return rejectWithValue(error.response?.data || "Unknown error");
    }
});
