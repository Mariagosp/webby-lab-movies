import axios from "axios";
import { API_URL } from "../shared/config";
const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;
export const getMovieById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`, {
            headers: {
                Authorization: `${AUTH_TOKEN}`,
            },
        });
        return response.data;
    }
    catch (error) {
        console.error("Failed to fetch movies:", error);
        throw error;
    }
};
