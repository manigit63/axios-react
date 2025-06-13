import React, { useEffect, useState } from "react";
import axios from "axios";

const randomTitles = [
  "Inception",
  "Titanic",
  "The Matrix",
  "Interstellar",
  "The Dark Knight",
  "Pulp Fiction",
  "Forrest Gump",
  "Gladiator",
  "Avatar",
  "Avengers",
  "Joker",
  "Parasite",
  "Fight Club",
  "The Godfather",
  "Deadpool",
];

const RandomMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const fetchedMovies = [];
      for (let title of randomTitles) {
        try {
          const response = await axios.get(
            "http://www.omdbapi.com/?t=avengers&y=2017",
            {
              params: {
                apikey: "2060fcad",
                t: title,
              },
            }
          );
          if (response.data && response.data.Response !== "False") {
            fetchedMovies.push(response.data);
          }
        } catch (err) {
          console.error("Error fetching movie:", title);
        }
      }
      setMovies(fetchedMovies);
    };

    fetchMovies();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Random Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-gray-800 text-white p-4 rounded-lg">
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/150"
              }
              alt={movie.Title}
              className="w-full h-64 object-cover mb-2 rounded"
            />
            <h2 className="text-lg font-semibold">{movie.Title}</h2>
            <p>🎬 {movie.Year}</p>
            <p>⭐ {movie.imdbRating}</p>
            <p>🎭 {movie.Genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomMovies;
