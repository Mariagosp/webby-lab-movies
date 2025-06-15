import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../shared/config";
const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;
export const createMovie = createAsyncThunk("movies/createMovie", async (movie, { rejectWithValue }) => {
    try {
        const response = await axios.post(API_URL, movie, {
            headers: {
                Authorization: AUTH_TOKEN,
            },
        });
        return response.data.data;
    }
    catch (err) {
        console.error("Ошибка при создании фильма:", err);
        return rejectWithValue(err?.response?.data?.message || "Create movie error");
    }
});
