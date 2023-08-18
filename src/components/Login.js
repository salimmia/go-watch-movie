import React, { useState } from "react";
import Input from "./Form/Input";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setJwtToken } = useOutletContext();
  const { setAlertMessage } = useOutletContext();
  const { setAlertClassName } = useOutletContext();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    // build the request payload
    let payload = {
      email: email,
      password: password,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(payload),
    };

    fetch(`/authenticate`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setAlertClassName("alert-danger");
          setAlertMessage(data.message);
        } else {
          setJwtToken(data.access_token);
          setAlertClassName("d-none");
          setAlertMessage("");
          navigate("/");
        }
      })
      .catch((error) => {
        setAlertClassName("alert-danger");
        setAlertMessage(error);
      });
  }

  return (
    <>
      <div className="col-md-6 offset-md-3">
        <h1>Login</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <Input
            title="Email Address"
            type="email"
            className="form-control"
            name="email"
            autoComplete="email-new"
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            title="Password"
            type="password"
            className="form-control"
            name="password"
            autoComplete="password-new"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Input type="submit" className="btn btn-primary" value="login" />
        </form>
      </div>
    </>
  );
}
