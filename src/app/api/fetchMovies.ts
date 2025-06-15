import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { mapResponseToMovieType } from "../../utils/mapResponseToMovieType";
import { API_URL } from "../../shared/config";

export type ResponseMovieType = {
  id: number;
  title: string;
  year: number;
  format: string;
  createdAt: string;
  updatedAt: string;
};

const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (
    {
      search,
      order,
      sort,
    }: {
      search?: string;
      order?: "ASC" | "DESC" | null;
      sort?: string;
      limit?: number;
      offset?: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const params = new URLSearchParams();
      if (search) params.append("search", search);
      if (sort) params.append("sort", sort);
      if (order) params.append("order", order);

      const response = await axios.get(`${API_URL}?${params.toString()}`, {
        headers: {
          Authorization: `${AUTH_TOKEN}`,
        },
      });

      const newMoviesList = mapResponseToMovieType(response.data.data);

      return newMoviesList;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Unknown error");
    }
  }
);
