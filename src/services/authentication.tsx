import Cookies from "js-cookie";
import { cookies } from "../../config/rules.json";

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

  isAuthenticated() {
    const expiresAt = Cookies.getJSON(cookies.expiresAt);
    const currentTime = new Date().getTime() / 1000;
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

      const expiresAt = expiresAtCookie.split("=")[1];
      const currentTime = new Date().getTime() / 1000;
      return currentTime < expiresAt;
    }
  }
}

export default new Authentication();
