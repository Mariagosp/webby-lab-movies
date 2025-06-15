import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { MovieWithDetails } from "../../types/MovieType";

const API_URL = import.meta.env.VITE_API_URL;
const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

type CreateMoviePayload = {
  title: string;
  year: number;
  format: "VHS" | "DVD" | "Blu-Ray";
  actors: string[];
};

type ResponseData = {
  data: MovieWithDetails;
  status: number;
};

export const createMovie = createAsyncThunk<
  MovieWithDetails,
  CreateMoviePayload, 
  { rejectValue: string } 
>("movies/createMovie", async (movie, { rejectWithValue }) => {
  try {
    const response = await axios.post<ResponseData>(API_URL, movie, {
      headers: {
        Authorization: AUTH_TOKEN,
      },
    });

    return response.data.data; 
  } catch (err: any) {
    console.error("Ошибка при создании фильма:", err);
    return rejectWithValue(err?.response?.data?.message || "Create movie error");
  }
});
