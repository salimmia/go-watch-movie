import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Input from "./form/Input";
import Select from "./form/Select";
import CheckBox from "./form/CheckBox";

const EditMovie = () => {
  const navigate = useNavigate();
  const { jwtToken } = useOutletContext();

  const [error, setError] = useState(null);
  const [errors, setErrors] = useState([]);
  const [movie, setMovie] = useState([
    {
      id: 0,
      title: "",
      realease_date: "",
      runtime: "",
      mpaa_rating: "",
      deccription: "",
    },
  ]);

  const hasError = (key) => {
    return errors.indexOf(key) !== -1;
  };

  let { id } = useParams();

  useEffect(() => {
    // if (jwtToken === "") {
    //   navigate("/login");
    //   return;
    // }
  }, [jwtToken, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = () => (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setMovie({
      ...movie,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Add/Edit Movie</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={movie.id}></input>
        <Input
          title={"Title"}
          className={"form-control"}
          type={"text"}
          name={"title"}
          value={movie.title}
          onChange={handleChange("title")}
          errorDiv={hasError("title") ? "d-danger" : "d-none"}
          errorMsg={"Please enter a title"}
        />
      </form>
    </div>
  );
};

export default EditMovie;
