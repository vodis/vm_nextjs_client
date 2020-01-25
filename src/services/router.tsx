import { routes } from "../../config/rules.json";

export function matches(route: string) {
  return {
    isUserRoute: !!route.match(new RegExp(routes.protected[0], "gi")),
    isAdminRoute: !!route.match(new RegExp(routes.protected[1], "gi"))
  };
}

export function redirect(routeType: string, access: boolean, router: any) {
  switch (routeType) {
    case "user":
      console.log("@Route to User");
      break;

    case "admin":
      console.log("@Route to Admin", access, router);

      if (typeof access === "boolean") {

        if (access && router.pathname === `/${routes.rootAdmin}`) {
          console.log('I');
          router.push(`/${routes.rootAdmin}/dashboard`);
        }

        if (!access) {
          console.log('II')
          router.push(`/${routes.rootAdmin}`);
        }

      } 

      if (access === undefined) {
        console.log('III');
        router.push(`/${routes.rootAdmin}`);
      }

      break;
      
    default:
      console.log("@Route to Common");
      break;
  }
}
