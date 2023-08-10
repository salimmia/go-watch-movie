import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Movie() {
  const [movie, setMovie] = useState({});
  let { id } = useParams();

  useEffect(() => {
    let myMovie = {
      id: 1,
      title: "Priotoma",
      release_date: "2023-03-03",
      runtime: 116,
      mpaa_rating: "R",
      description: "Some long description",
    };
    setMovie(myMovie);
  }, [id]);

  return (
    <div>
      <h2>Movie</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Movie Name:</th>
            <th>Release Date: </th>
            <th>Rating: </th>
          </tr>
        </thead>
        <tbody>
          <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{movie.release_date}</td>
            <td>{movie.mpaa_rating}</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <p>{movie.description}</p>
    </div>
  );
}
