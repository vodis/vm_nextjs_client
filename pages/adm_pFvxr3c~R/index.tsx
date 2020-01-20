import * as React from "react";
import Wrapper from "../../src/components/Wrapper/Wrapper";
import Layout from "../../src/modules/admin/components/Layout/Layout";

const Admin = () => (
  <Wrapper>
    <Layout authorized={false} />
  </Wrapper>
);

export default Admin;
