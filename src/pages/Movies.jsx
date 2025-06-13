import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getMovies } from "../services/services";

const Movies = () => {
  const [data, setData] = useState([]);

  const API = "?apikey=2060fcad&s=avengers&page=2";

  const getMoviesData = async () => {
    try {
      const res = await getMovies();
      console.log(res.data.Search);
      setData(res.data.Search);
    } catch (error) {
      console.log(" message: ", error.message);
    }
  };

  useEffect(() => {
    getMoviesData();
  }, []);

  return (
    <div>
      <ul className="flex justify-start p-6 gap-8 flex-wrap">
        {data.map((item) => (
          <li className="w-1/5" key={item.imdbID}>
            <Card key={item.imdbID} movieData={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
