import React, { useEffect } from "react";
import Head from "next/head";
import { useDispatch } from 'react-redux';
import { withRedux } from '../../hok/withRedux';

// import CombineRoutes from "../../routes/common.route";
import { CombineRoutes } from "../../services/lazy";

import "./Wrapper.scss";

type WrapperProps = {
  title?: string;
  auth: {
    isAuthenticated: boolean;
    accessTo: boolean;
  };
};

const Wrapper: React.FC<WrapperProps> = ({
  children,
  title = "This is the default title",
  auth
}) => {
  const dispath = useDispatch();

  useEffect(() => {
    dispath({type: "AUTH_CREDENTIALS", payload: auth})
  }, []);
  
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CombineRoutes auth={auth}>{children}</CombineRoutes>
    </div>
  );
};

export default withRedux(Wrapper);
