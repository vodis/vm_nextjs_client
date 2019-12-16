import * as React from "react";
import { NextPage } from "next";
// import Fetch from "isomorphic-unfetch";

import Layout from "../components/Layout/Layout";
import Form from "../components/Form/Form";
import SignUp from "../components/Auth/SignUp";
import Login from "../components/Auth/Login";
import Logout from "../components/Auth/Logout";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>👋</h1>
      <Form>
        <SignUp />
      </Form>
      <hr/>
      <Form>
        <Login />
      </Form>
      <hr/>
      <Logout />
    </Layout>
  );
};

// IndexPage.getInitialProps = async function() {
//   const res = await fetch()
// };

export default IndexPage;
