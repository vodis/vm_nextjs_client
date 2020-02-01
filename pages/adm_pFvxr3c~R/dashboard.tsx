import React from "react";
import Wrapper from "../../src/components/Wrapper/Wrapper";
import Authentication from '../../src/services/authentication';

interface StatelessPage<P = {}> extends React.SFC<P> {
  getInitialProps?: (ctx: any) => Promise<P>
}

const Dashboard: StatelessPage<{}> = ({ auth }: any) => {

  return (
    <Wrapper auth={auth} >
      <div>Next stars: ...</div>
    </Wrapper>
  );
};

Dashboard.getInitialProps = async (ctx: any) => {
  const auth = await Authentication.getSession(ctx);
  return auth;
}

export default Dashboard;
