import React from "react";
import { withRedux } from "../src/providers/withRedux";
import Wrapper from "../src/components/Wrapper/Wrapper";
import Layout from "../src/components/Layout/Layout";
import Navbar from "../src/components/Navbar/Navbar";

type IndexPageProps = {
  auth: {
    isAuthenticated: boolean
  };
  router: object;
};

const IndexPage: React.FC<IndexPageProps> = ({ auth, router }) => {
  return (
    <Wrapper auth={auth} router={router} >
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
