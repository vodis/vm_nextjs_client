import React, { useState, useEffect } from "react";
import { withRouter } from "next/router";
import Authentication from "../services/authentication";

type WithRouterProps = {
  router?: object | any;
  auth?: any;
};

const CombineRoutes: React.FunctionComponent<WithRouterProps | any> = ({
  router,
  children,
  auth
}) => {
  let routes;
  if (auth && auth.isAuthenticated) {
    routes = !router.pathname.match(/adm_pFvxr3c~R/) ? "user" : "admin";
  } else {
    routes = "common";
  }

  useEffect(() => {
    const getPermission = async () => {
      return await Authentication.checkPermissions("admin");
    };
    console.log(getPermission());
  }, []);

  switch (routes) {
    case "user":
      console.log("@Route to User");
      break;
    case "admin":
      console.log("@Route to Admin");
      break;
    default:
      console.log("@Route to Common");
  }

  return <>{children}</>;
};

export default withRouter(CombineRoutes);
