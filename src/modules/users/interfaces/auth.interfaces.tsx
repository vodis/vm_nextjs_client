import { User } from "./user.interfaces";

export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_SIGNIN = "AUTH_SIGNIN";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

interface AuthLoginAction {
  type: typeof AUTH_LOGIN;
  payload: User;
}

interface AuthSigninAction {
  type: typeof AUTH_SIGNIN;
  payload: User;
}

interface AuthLogoutAction {
  type: typeof AUTH_LOGOUT;
}

export type AuthActionTypes =
  | AuthLoginAction
  | AuthSigninAction
  | AuthLogoutAction;
