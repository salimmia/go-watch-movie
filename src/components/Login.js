import React, { useState } from "react";
import Input from "./Form/Input";
import { useOutletContext } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setJwtToken } = useOutletContext();

  function handleSubmit(event) {
    event.preventDefault();

    console.log(email, password);

    if (email === "admin@admin.com") {
      setJwtToken("abc");
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
