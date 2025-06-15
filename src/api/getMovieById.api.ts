import axios from "axios";
import type { ActorsType, FormatType } from "../types/MovieType";
import { API_URL } from "../shared/config";

const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

type ResponseData = {
    data: ResponseMovieType,
    status: number
}

  export type ResponseMovieType = {
    id: number,
    title: string,
    year: number,
    format: FormatType,
    actors: ActorsType[],
    createdAt: string,
    updatedAt: string,
  }

export const getMovieById = async (id: number): Promise<ResponseData> => {
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: {
        Authorization: `${AUTH_TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    throw error;
  }
}