import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let moviesList = [
      {
        id: 1,
        title: "Priotoma",
        release_date: "2023-03-03",
        runtime: 116,
        mpaa_rating: "R",
        sescription: "Some long description",
      },
      {
        id: 2,
        title: "Avengers",
        release_date: "2021-03-03",
        runtime: 115,
        mpaa_rating: "PG-13",
        sescription: "Some long description",
      },
    ];
    setMovies(moviesList);
  }, []);

  return (
    <>
      <div className="text-center">
        <h2>Movies</h2>
        <hr />
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Movie</th>
              <th>Release Date</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id}>
                <td>
                  <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </td>
                <td>{movie.release_date}</td>
                <td>{movie.mpaa_rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
