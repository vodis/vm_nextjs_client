import * as React from "react";
import Admin from "../../../../components/Auth/Admin";

import "./Layout.scss";

function renderTemplate(authorized: boolean) {
  if (!authorized) {
    return <Admin />;
  }

  return (
    <>
      <header className="header"></header>
    </>
  );
}

type Props = {
  authorized: boolean;
};

const Layout: React.FunctionComponent<Props> = ({ authorized }) => (
  <div>{renderTemplate(authorized)}</div>
);

export default Layout;
