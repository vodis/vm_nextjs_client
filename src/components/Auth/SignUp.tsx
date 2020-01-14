import React, { FunctionComponentElement } from "react";
import useForm from "../../hooks/useForm";

const SignUp = (props: any): any => {
  const signup = () => {
    alert(`User Created!
           Password: ${inputs.password} ${inputs.rePassword}
           Email: ${inputs.email}`);
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(signup);

  return (
    <>
      <div className="subtitle">
        <ul className="subtitle__list">
          <li className="subtitle__list-pointer">Create account</li>
          <li
            className="subtitle__list-section"
            onClick={() => props.handleSelect("login")}
          >
            Login to account
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
        <div className="inp-group">
          <label htmlFor="rePassword">Re-enter Password</label>
          <input
            type="password"
            name="rePassword"
            id="rePassword"
            onChange={handleInputChange}
            value={inputs.password2}
            autoComplete="rePassword"
          />
        </div>
        <div className="btn-group">
          <button className="btn-group__submit" type="submit">
            Signup
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
