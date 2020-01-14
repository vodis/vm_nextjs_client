import React from "react";
import useForm from "../../hooks/useForm";

export default function Reset(props: any): any {
  const login = () => {
    alert(`User Created!
               Name: ${inputs.firstName} ${inputs.lastName}
               Email: ${inputs.email}`);
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(login);

  return (
    <>
      <div className="subtitle">
        <ul className="subtitle__list">
          <li className="subtitle__list-pointer">
            Reset password will have sent at your email address
          </li>
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
        <div className="btn-group">
          <button className="btn-group__submit" type="submit">
            Send
          </button>
        </div>
      </form>
    </>
  );
}
