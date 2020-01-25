import React from "react";
import { withRedux } from "../src/hok/withRedux";
import Wrapper from "../src/components/Wrapper/Wrapper";
import Layout from "../src/components/Layout/Layout";
import Navbar from "../src/components/Navbar/Navbar";

type IndexPageProps = {
  auth: {
    isAuthenticated: boolean;
    accessTo: boolean;
  };
};

const IndexPage: React.FC<IndexPageProps> = ({ auth }) => {
  return (
    <Wrapper auth={auth}>
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
