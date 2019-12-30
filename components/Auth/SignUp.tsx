import * as React from "react";
import useForm from "../../hooks/useForm";

const SignUp = () => {
  const signup = () => {
    alert(`User Created!
           Password: ${inputs.password} ${inputs.rePassword}
           Email: ${inputs.email}`);
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(signup);

  return (
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
          autoComplete="username"
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
          autoComplete="current-password"
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
        />
      </div>
      <div className="btn-group">
        <button className="btn-group__submit" type="submit">Sign Up</button>
        <p className="btn-group__helper">Forgot your password?</p>
      </div>
    </form>
  );
};

export default SignUp;
