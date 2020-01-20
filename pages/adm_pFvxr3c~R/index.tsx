import React, { useEffect } from "react";
import { withRouter } from 'next/router';
import Wrapper from "../../src/components/Wrapper/Wrapper";
import Layout from "../../src/modules/admin/components/Layout/Layout";
import authentication from '../../src/services/authentication';

const Admin = (props: any) => {

  useEffect(() => {
    authentication.handleAuthentication(props.route);
  }, []);

  return (
    <Wrapper>
      <Layout authorized={false} />
    </Wrapper>
  );
}

export default withRouter(Admin);
