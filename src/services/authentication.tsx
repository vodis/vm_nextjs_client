import Cookies from "js-cookie";
import fetch from "isomorphic-unfetch";
import { cookies } from "../../config/rules.json";
import { origin } from "../../config/host.json";
import { matches } from "./router";

class Authentication {
  async getSession(ctx: any) {
    const router = { pathname: ctx.asPath };

    // client 
    const isClientAuthenticated = process.browser && await this.isAuthenticated();
    const token = Cookies.getJSON(cookies.jwt);
    const clientAccessTo = await this.checkPermissions(null, router, true, token);

    // server
    const isServerAuthenticated = !process.browser && await this.serverAuth(ctx.req, router);
    const serverAccessTo = await this.checkPermissions(ctx.req, router); 
    
    // summary
    const isAuthenticated = process.browser ? isClientAuthenticated : isServerAuthenticated;
    let accessTo = process.browser ? clientAccessTo : serverAccessTo;
    
    if (accessTo && accessTo.error) {
      return { auth: { isAuthenticated, accessTo: undefined }}
    };

    return { auth: { isAuthenticated, accessTo } };
  }

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

  async checkPermissions(req: any, router: any, clientAuth = false, clientToken = '') {
    const match = matches(router.pathname);

    const protectedRoutes = match.isUserRoute
      ? "user"
      : match.isAdminRoute && "admin";

    // for initial render (server)
    if (req && req.headers.cookie) {
      const token = req.headers.cookie
        .split(";")
        .find((c: string) => c.trim().startsWith(cookies.jwt + "="))
        .split("=")[1];

      if (protectedRoutes) {
        const data = await fetch(`${origin}/${protectedRoutes}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer  " + token
          }
        });
        const result = await data.json();

        return result;
      }
      return {};
    }

    // for client redirect render (client)
    if (protectedRoutes) {
      if (clientAuth) {
        const data = await fetch(`${origin}/${protectedRoutes}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer  " + clientToken
          }
        });
        const result = await data.json();

        return result;
      }
    }

  }
}

export default new Authentication();
