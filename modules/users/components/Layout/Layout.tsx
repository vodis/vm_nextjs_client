import * as React from "react";

import Navbar from "../Navbar/Navbar";

import "./Layout.scss";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  title = "This is the default title"
}) => (
  <>
    <header className="header">
      <Navbar />
    </header>
    <footer>
      <span>I'm here to stay (Footer)</span>
    </footer>
  </>
);

export default Layout;
