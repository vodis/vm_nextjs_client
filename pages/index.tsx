import React from "react";
import { withRedux } from "../src/providers/withRedux";
import Wrapper from "../src/components/Wrapper/Wrapper";
import Layout from "../src/modules/users/components/Layout/Layout";

const IndexPage = () => {
  return (
    <Wrapper>
      <Layout />
    </Wrapper>
  );
};

export default withRedux(IndexPage);
