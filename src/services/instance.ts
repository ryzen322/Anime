import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_ANIME_API_KEY,
});
