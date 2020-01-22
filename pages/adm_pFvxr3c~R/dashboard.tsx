import React, { useEffect } from "react";
import Wrapper from "../../src/components/Wrapper/Wrapper";

type DashboardProps = {
  auth: {
    isAuthenticated: boolean
  };
  router: object;
};

const Dashboard: React.FC<DashboardProps> = ({ auth, router}) => {
  return (
    <Wrapper auth={auth} router={router}>
      <h1>Verifying login</h1>
    </Wrapper>
  );
};

export default Dashboard;
