import Cookies from "js-cookie";
import fetch from "isomorphic-unfetch";
import { cookies } from "../../config/rules.json";
import { origin } from "../../config/host.json";

class Authentication {
  getSession(key: string) {
    localStorage.getItem(key);
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

  handleAuthentication(route: string) {
    return new Promise((resolve, reject) => {
      // const data = fetch(`${origin}/${url}`, {
      //   method,
      //   headers
      // });
    })
  }

  isAuthenticated() {
    const expiresAt = Cookies.getJSON(cookies.expiresAt) * 1000;
    const currentTime = new Date().getTime();
    return currentTime < expiresAt;
  }

  clientAuth() {
    return this.isAuthenticated();
  }

  serverAuth(req: any) {
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
}

export default new Authentication();
