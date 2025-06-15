import axios from "axios";
import toast from "react-hot-toast";
import { API_URL } from "../shared/config";

const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

export const importMovie = async (formData: FormData) => {
  try {
    await axios.post(`${API_URL}/import`, formData, {
      headers: {
        Authorization: `${AUTH_TOKEN}`,
        "Content-Type": "multipart/form-data",
      },
    });
    toast.success("Imported successfully!");
  } catch (error) {
    toast.error("Something went wrong while importing");
    console.error(error);
  }
}