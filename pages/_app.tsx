import "../static/styles/main.scss";
import * as React from "react";
import App from "next/app";

export default class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
