import React from "react";
import { withRedux } from "../providers/withRedux";
import Wrapper from "../components/Wrapper/Wrapper";
import Layout from "../modules/users/components/Layout/Layout";

const IndexPage = () => {
  return (
    <Wrapper>
      <Layout />
    </Wrapper>
  );
};

export default withRedux(IndexPage);
