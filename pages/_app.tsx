import "../static/styles/main.scss";
import * as React from "react";
import App from "next/app";
import Authentication from "../src/services/authentication";

import "../static/styles/main.scss";

export default class NextApp extends App {
  static async getInitialProps({ Component, router, ctx }: any) {
    let pageProps = {};
    const isAuthenticated = process.browser
      ? Authentication.clientAuth()
      : Authentication.serverAuth(ctx.req);

    console.log('>>>>>', isAuthenticated, router, process.browser);

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
