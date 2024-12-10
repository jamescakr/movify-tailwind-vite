import axios from "axios";

// const API_KEY = process.env.REACT_APP_API_KEY; >> for CRA (Create React App)
const API_KEY = import.meta.env.VITE_API_KEY; //for vite

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

//newly-added common api fetching for infinite scroll
export const fetchMovies = async (path, page) => {
  const response = await api.get(`${path}?page=${page}`);
  return response.data;
};

export default api;
