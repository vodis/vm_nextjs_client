import * as React from "react";
import { NextPage } from "next";
// import Fetch from "isomorphic-unfetch";

import Layout from "../components/Layout/Layout";
import Form from "../components/Form/Form";
import SignUp from "../components/Auth/SignUp";
import useSignUpForm from "../hooks/useForm";

const IndexPage: NextPage = () => {
  const signup = () => {
    alert(`User Created!
           Name: ${inputs.firstName} ${inputs.lastName}
           Email: ${inputs.email}`);
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>👋</h1>
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
    </Layout>
  );
};

// IndexPage.getInitialProps = async function() {
//   const res = await fetch()
// };

export default IndexPage;
