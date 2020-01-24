import React, { useEffect } from "react";
import Wrapper from "../../src/components/Wrapper/Wrapper";

type PreferenceProps = {
  auth: {
    isAuthenticated: boolean;
    accessTo: boolean;
  };
};

const Preference: React.FC<PreferenceProps> = ({ auth }) => {
  return (
    <Wrapper auth={auth}>
      <h1>Verifying login</h1>
    </Wrapper>
  );
};

export default Preference;
