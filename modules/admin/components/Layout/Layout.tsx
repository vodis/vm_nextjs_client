import * as React from "react";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  title = "This is the default title"
}) => (
  <>
    <header className="header"></header>
    <footer>
      <span>I'm here to stay (Footer)</span>
    </footer>
  </>
);

export default Layout;
