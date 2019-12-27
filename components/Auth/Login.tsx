import * as React from "react";
import useForm from "../../hooks/useForm";

const Login = () => {
  const login = () => {
    alert(`User Created!
           Name: ${inputs.firstName} ${inputs.lastName}
           Email: ${inputs.email}`);
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(login);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Email Address
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            value={inputs.email}
            required
            autoComplete="username"
          />
        </label>
      </div>
      <div>
        <label>
          Password
          <input
            type="password"
            name="password1"
            onChange={handleInputChange}
            value={inputs.password1}
            autoComplete="current-password"
          />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
