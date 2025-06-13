import axios from "axios";

const api = axios.create({
  baseURL: "http://www.omdbapi.com/",
});

export const getMovies = () => {
  return api.get("?apikey=2060fcad&s=avengers&page=1");
};
