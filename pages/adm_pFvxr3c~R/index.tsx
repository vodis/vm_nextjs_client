import React, { useEffect } from "react";
import { withRouter } from "next/router";
import Wrapper from "../../src/components/Wrapper/Wrapper";
import Layout from "../../src/components/Layout/Layout";
import AdminForm from "../../src/components/Auth/Admin";

type AdminProps = {
  route: string;
  auth?: object;
};

const Admin: React.FunctionComponent<AdminProps | any> = ({ route, auth }) => {
  return (
    <Wrapper auth={auth}>
      <Layout>
        <AdminForm />
      </Layout>
    </Wrapper>
  );
};

export default withRouter(Admin);
