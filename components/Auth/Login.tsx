import React from "react";
import useForm from "../../hooks/useForm";
import useDataFetching from "../../hooks/useDataFetching";

const Login = (props: any): any => {
  const login = async () => {};

  const { inputs, handleInputChange, handleSubmit } = useForm(login);
  const {
    loading,
    results,
    error
  } = useDataFetching(
    `/auth/login?email=${inputs.email}&password=${inputs.password}`,
    "POST",
    { "Content-Type": "application/json" }
  );
  console.log(loading, results, error);

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
            value={inputs.password1}
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
