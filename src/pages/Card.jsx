import React from "react";

const Card = ({ movieData }) => {
  return (
    <div className="bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <img
        src={
          movieData.Poster !== "N/A"
            ? movieData.Poster
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={movieData.Title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-1">{movieData.Title}</h2>
          <p className="text-sm text-gray-400 mb-2">📅 {movieData.Year}</p>
          <p className="text-sm text-gray-500 capitalize">
            🎬 {movieData.Type}
          </p>
        </div>
        <div className="mt-4">
          <a
            href={`https://www.imdb.com/title/${movieData.imdbID}`}
            target="_blank"
            rel="noopener noreferrer">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full transition-colors duration-200">
              🎥 Watch Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
