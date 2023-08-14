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

    console.log(email, password);

    if (email === "admin@admin.com") {
      setJwtToken("abc");
      setAlertClassName("d-none");
      setAlertMessage("");
      navigate("/");
    } else {
      setAlertClassName("alert-danger");
      setAlertMessage("Invalid Credential!");
    }
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
