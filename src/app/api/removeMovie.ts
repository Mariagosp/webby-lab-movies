import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../shared/config";

const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

export const removeMovieThunk = createAsyncThunk(
  'movies/removeMovie',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`, {
        headers: {
          Authorization: `${AUTH_TOKEN}`,
        },
      });

      return response.data; 
    } catch (error) {
      console.error("Failed to remove movie:", error);
      return rejectWithValue("Failed to remove movie"); 
    }
  }
);
