import * as React from "react";
import Head from "next/head";

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
}) => (
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

export default Wrapper;
