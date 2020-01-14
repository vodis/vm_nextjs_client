import * as React from "react";
import Head from "next/head";

import "./Wrapper.scss";

type Props = {
  title?: string;
};

const Wrapper: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title"
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
    {children}
  </div>
);

export default Wrapper;
