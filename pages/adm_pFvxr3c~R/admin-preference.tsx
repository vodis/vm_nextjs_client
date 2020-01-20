import React, { useEffect } from "react";
import Wrapper from "../../src/components/Wrapper/Wrapper";
import authentication from '../../src/services/authentication';
import { withRouter } from 'next/router';

const AdminPreference = (props: any) => {
  useEffect(() => {
    //  authentication.handleAuthentication();
    console.log('test')
     props.router.push('/');
  }, []);

  return (
    <Wrapper>
      <h1>Verifying login data</h1>
    </Wrapper>
  );
}

export default withRouter(AdminPreference);
