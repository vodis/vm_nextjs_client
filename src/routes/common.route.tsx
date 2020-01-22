import React, { useState, useEffect } from "react";
import { withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";
import authentication from "../services/authentication";
import { routes } from '../../config/rules.json';

type CombineRoutesProps = {
  auth: {
    isAuthenticated: boolean
  };
}

const CombineRoutes: React.FC<WithRouterProps & CombineRoutesProps> = ({
  router,
  children,
  auth
}) => {
  const [rules, setRules] = useState('common');
  
  useEffect(() => {
    const matches = {
      'isUserRoute': !!router.pathname.match(new RegExp(routes.protected[0], 'gi')),
      'isAdminRoute': !!router.pathname.match(new RegExp(routes.protected[1], 'gi')),
    };
    const getRootRules = matches.isUserRoute 
    ? 'user'
    : matches.isAdminRoute && 'admin';
    
    if (getRootRules) {
      setRules(getRootRules);
    }
    
    if (auth.isAuthenticated) {
      if (getRootRules) {
        (async function isPermitted() {
          let result = await authentication.checkPermissions(getRootRules);
          setPermitted(result[getRootRules]);
        })();
      }
    } else {
      setPermitted(false);
    }
  }, []);
  
  const [permitted, setPermitted] = useState();

  switch (rules) {
    case "user":
      console.log("@Route to User");
      break;
    case "admin":
      console.log("@Route to Admin");
      permitted === true && router.pathname === "/adm_pFvxr3c~R" && router.push('/adm_pFvxr3c~R/dashboard');
      permitted === false && router.pathname.match(/(\/.+?\/)(.+)/) && router.push('/adm_pFvxr3c~R');
      break;
    default:
      console.log("@Route to Common");
  }

  return <>{children}</>;
};

export default withRouter(CombineRoutes);
