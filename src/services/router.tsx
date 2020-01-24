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
      console.log("@Route to Admin");
      access === true && router.push(`/${routes.rootAdmin}/dashboard`);
      access === false && router.push(`/${routes.rootAdmin}`);
      break;
    default:
      console.log("@Route to Common");
      break;
  }
}
