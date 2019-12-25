import * as React from "react";
import { NextPage } from "next";

import Layout from "../components/Layout/Layout";
import Form from "../components/Form/Form";
import SignUp from "../components/Auth/SignUp";
import Login from "../components/Auth/Login";
import Logout from "../components/Auth/Logout";

const IndexPage: NextPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>👋</h1>
  </Layout>
);

export default IndexPage;
