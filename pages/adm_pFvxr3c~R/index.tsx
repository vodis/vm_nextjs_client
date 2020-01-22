import React, { useEffect } from "react";
import Wrapper from "../../src/components/Wrapper/Wrapper";
import Layout from "../../src/components/Layout/Layout";
import AdminForm from "../../src/components/Auth/Admin";

type AdminProps = {
  auth: {
    isAuthenticated: boolean
  };
  router: object;
};

const Admin: React.FC<AdminProps> = ({ auth, router }) => {
  return (
    <Wrapper auth={auth} router={router} >
      <Layout>
        <AdminForm />
      </Layout>
    </Wrapper>
  );
};

export default Admin;
