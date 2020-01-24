import Cookies from "js-cookie";
import fetch from "isomorphic-unfetch";
import { cookies } from "../../config/rules.json";
import { origin } from "../../config/host.json";
import { matches } from "./router";

class Authentication {
  setSession(authResult: any) {
    Cookies.set(cookies.user, authResult.id);
    Cookies.set(cookies.jwt, authResult.token);
    Cookies.set(cookies.expiresAt, authResult.expiresAt);
  }

  logout() {
    Cookies.remove(cookies.user);
    Cookies.remove(cookies.jwt);
    Cookies.remove(cookies.expiresAt);
  }

  isAuthenticated() {
    const expiresAt = Cookies.getJSON(cookies.expiresAt) * 1000;
    const currentTime = new Date().getTime();
    return currentTime < expiresAt;
  }

  clientAuth() {
    return this.isAuthenticated();
  }

  serverAuth(req: any, router: any) {
    if (req.headers.cookie) {
      const expiresAtCookie = req.headers.cookie
        .split(";")
        .find((c: string) => c.trim().startsWith(cookies.expiresAt + "="));

      if (!expiresAtCookie) return undefined;

      const expiresAt = expiresAtCookie.split("=")[1] * 1000;
      const currentTime = new Date().getTime();
      return currentTime < expiresAt;
    }
  }

  async checkPermissions(req: any, router: any) {
    if (req && req.headers.cookie) {
      const token = req.headers.cookie
        .split(";")
        .find((c: string) => c.trim().startsWith(cookies.jwt + "="))
        .split("=")[1];

      const match = matches(router.pathname);

      const protectedRoutes = match.isUserRoute
        ? "user"
        : match.isAdminRoute && "admin";

      if (protectedRoutes) {
        const data = await fetch(`${origin}/${protectedRoutes}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer  " + token
          }
        });
        const result = await data.json();

        return result[protectedRoutes];
      }

      return true;
    }
  }
}

export default new Authentication();
