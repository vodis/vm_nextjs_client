import React from "react";
import Wrapper from "../../src/components/Wrapper/Wrapper";

type DashboardProps = {
  auth?: object;
};

const Dashboard: React.FunctionComponent<DashboardProps> = ({ auth }) => {
  return <Wrapper auth={auth}>DashboardProps</Wrapper>;
};

export default Dashboard;
