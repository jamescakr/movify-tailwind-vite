import axios from "axios";

// const API_KEY = process.env.REACT_APP_API_KEY; >> CRA로 만들었을때만 사용
const API_KEY = import.meta.env.VITE_API_KEY; //vite를 쓸때는 반드시 이렇게 써야함

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default api;
