import Cookies from "js-cookie";
import fetch from "isomorphic-unfetch";
import { cookies } from "../../config/rules.json";
import { origin } from "../../config/host.json";

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

  async checkPermissions(url: string) {
    const token = Cookies.getJSON(cookies.jwt).trim();
    const data = await fetch(`${origin}/${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer  " + token
      }
    });
    const result = await data.json();
    return result;
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
