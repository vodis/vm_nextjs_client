import React, { useState, useEffect } from "react";
import { withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";
import { matches, redirect } from "../services/router";
import { routes } from "../../config/rules.json";

type CombineRoutesProps = {
  auth: {
    isAuthenticated: boolean;
    accessTo: boolean;
  };
};

const CombineRoutes: React.FC<WithRouterProps & CombineRoutesProps> = ({
  children,
  auth,
  router
}) => {
  const [loading, setLoading] = useState(true);

  const match = matches(router.pathname);

  const getRootRules = match.isUserRoute
    ? "user"
    : match.isAdminRoute && "admin";

  useEffect(() => {
    if (getRootRules) {
      redirect(getRootRules, auth.accessTo, router);
    }
    setLoading(false);
  }, []);

  if (getRootRules !== false && loading) {
    return <>Loading...</>;
  }

  if (!getRootRules || (!loading && !auth.accessTo)) {
    return <>{children}</>;
  }

  return null;
};

export default withRouter(CombineRoutes);
