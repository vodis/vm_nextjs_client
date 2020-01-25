import React from "react";
import Wrapper from "../../src/components/Wrapper/Wrapper";
import Layout from "../../src/components/Layout/Layout";
import AdminForm from "../../src/components/Auth/Admin";

type AdminProps = {
  auth: {
    isAuthenticated: boolean;
    accessTo: boolean;
  };
};

const Admin: React.FC<AdminProps> = ({ auth }) => {
  return (
    <Wrapper auth={auth}>
      <Layout>
        <AdminForm />
      </Layout>
    </Wrapper>
  );
};

export default Admin;
