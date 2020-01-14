import * as React from "react";
import { NextPage } from "next";
import Wrapper from "../../src/components/Wrapper/Wrapper";
import Layout from "../../src/modules/admin/components/Layout/Layout";

const Admin: NextPage = () => (
  <Wrapper>
    <Layout authorized={false} />
  </Wrapper>
);

export default Admin;
