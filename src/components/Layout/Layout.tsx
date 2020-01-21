import * as React from "react";

import "./Layout.scss";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  title = "This is the default title",
  children
}) => <>{children}</>;

export default Layout;
