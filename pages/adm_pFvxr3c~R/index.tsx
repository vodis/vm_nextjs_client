import React from "react";
import Wrapper from "../../src/components/Wrapper/Wrapper";
import Layout from "../../src/components/Layout/Layout";
import AdminForm from "../../src/components/Auth/Admin";
import Authentication from '../../src/services/authentication';

interface StatelessPage<P = {}> extends React.SFC<P> {
  getInitialProps?: (ctx: any) => Promise<P>
}

const Admin: StatelessPage<{}> = ({ auth }: any) => {
  return (
    <Wrapper auth={auth}>
      <Layout>
        <AdminForm />
      </Layout>
    </Wrapper>
  );
};

Admin.getInitialProps = async (ctx: any) => {
  const auth = await Authentication.getSession(ctx);
  console.log("object", auth);
  return auth;
}

export default Admin;
