import React, { useEffect } from "react";
import Wrapper from "../../src/components/Wrapper/Wrapper";

type PreferenceProps = {
  auth: {
    isAuthenticated: boolean
  };
  router: object;
};

const Preference: React.FC<PreferenceProps> = ({ auth, router}) => {
  return (
    <Wrapper auth={auth} router={router}>
      <h1>Verifying login</h1>
    </Wrapper>
  );
};

export default Preference;
