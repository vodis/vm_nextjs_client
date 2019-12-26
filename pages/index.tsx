import * as React from "react";
import { NextPage } from "next";
import { useDispatch } from "react-redux";
import { withRedux } from "../providers/withRedux";

import Layout from "../components/Layout/Layout";
import Form from "../components/Form/Form";
import SignUp from "../components/Auth/SignUp";
import Login from "../components/Auth/Login";
import Logout from "../components/Auth/Logout";

const IndexPage: NextPage = () => {
  const dispatch = useDispatch();
  return <Layout>Boom</Layout>;
};

IndexPage.getInitialProps = ({ reduxStore }: any) => {
  const { dispatch } = reduxStore;
  return {};
};

export default withRedux(IndexPage);
