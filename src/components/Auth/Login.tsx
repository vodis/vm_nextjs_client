import React, { useState, useEffect } from "react";
import useForm from "../../hooks/useForm";
import useDataFetching from "../../hooks/useDataFetching";
import Authentication from "../../services/authentication";

const Login = (props: any): any => {
  const [url, setUrl] = useState("");

  const { inputs, handleInputChange, handleSubmit } = useForm(() => {
    setUrl(`auth/login?email=${inputs.email}&password=${inputs.password}`);
  });

  const { loading, results, error } = useDataFetching(url, "POST", {
    "Content-Type": "application/json"
  });

  useEffect(() => {
    if (results.token) {
      Authentication.setSession(results);
    }
  }, [loading]);

  return (
    <>
      <div className="subtitle">
        <ul className="subtitle__list">
          <li className="subtitle__list-pointer">Login to account</li>
          <li
            className="subtitle__list-section"
            onClick={() => props.handleSelect("signup")}
          >
            Create account
          </li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inp-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleInputChange}
            value={inputs.email}
            required
            autoComplete="email"
          />
        </div>
        <div className="inp-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleInputChange}
            value={inputs.password}
            autoComplete="password"
          />
        </div>
        <div className="btn-group">
          <button className="btn-group__submit" type="submit">
            Login
          </button>
          <p
            className="btn-group__helper"
            onClick={() => props.handleSelect("password reset")}
          >
            Forgot your password?
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
