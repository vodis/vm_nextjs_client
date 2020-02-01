import "../static/styles/main.scss";
import * as React from "react";
import App from "next/app";
import Authentication from "../src/services/authentication";

import "../static/styles/main.scss";

class NextApp extends App {
  static async getInitialProps({ Component, router, ctx }: any) {
    let pageProps = {};
    const isAuthenticated = process.browser
      ? Authentication.clientAuth()
      : Authentication.serverAuth(ctx.req, router);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const accessTo = await Authentication.checkPermissions(ctx.req, router); 

    const auth = { isAuthenticated, accessTo };
    return { pageProps, auth };
  }

  render() {
    const { Component, pageProps }: any = this.props;

    return <Component {...pageProps} />;
  }
}

export default NextApp;
