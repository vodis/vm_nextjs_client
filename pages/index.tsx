import React from "react";
import { withRedux } from "../src/providers/withRedux";
import Wrapper from "../src/components/Wrapper/Wrapper";
import Layout from "../src/components/Layout/Layout";
import Navbar from "../src/components/Navbar/Navbar";

const IndexPage = () => {
  return (
    <Wrapper>
      <Layout>
        <header className="header">
          <Navbar />
        </header>
        <footer>
          <span>I'm here to stay (Footer)</span>
        </footer>
      </Layout>
    </Wrapper>
  );
};

export default withRedux(IndexPage);
