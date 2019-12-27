import * as React from "react";
import useForm from "../../hooks/useForm";

const SignUp = () => {
  const signup = () => {
    alert(`User Created!
           Name: ${inputs.firstName} ${inputs.lastName}
           Email: ${inputs.email}`);
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(signup);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            onChange={handleInputChange}
            value={inputs.firstName}
            required
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            onChange={handleInputChange}
            value={inputs.lastName}
            required
          />
        </label>
      </div>
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
      <div>
        <label>
          Re-enter Password
          <input
            type="password"
            name="password2"
            onChange={handleInputChange}
            value={inputs.password2}
            autoComplete="current-password"
          />
        </label>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
