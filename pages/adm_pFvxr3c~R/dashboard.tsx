import React, { useEffect } from "react";
import Wrapper from "../../src/components/Wrapper/Wrapper";

type DashboardProps = {
  auth: {
    isAuthenticated: boolean;
    accessTo: boolean;
  };
};

const Dashboard: React.FC<DashboardProps> = ({ auth }) => {
  return (
    <Wrapper auth={auth}>
      <h1>Verifying login</h1>
    </Wrapper>
  );
};

export default Dashboard;
