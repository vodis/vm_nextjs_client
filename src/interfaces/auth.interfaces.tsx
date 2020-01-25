import { User } from "./user.interfaces";

export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_SIGNIN = "AUTH_SIGNIN";
export const AUTH_LOGOUT = "AUTH_LOGOUT";
export const AUTH_CREDENTIALS = "AUTH_CREDENTIALS";

export interface AuthCredentialsTypes {
  isAuthenticated?: boolean;
  accessTo?: {
    user: boolean;
    admin: boolean;
    guest: boolean;
  }
}

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

interface AuthCredentialsAction {
  type: typeof AUTH_CREDENTIALS;
  payload: AuthCredentialsTypes;
}

export type AuthActionTypes =
  | AuthLoginAction
  | AuthSigninAction
  | AuthLogoutAction
  | AuthCredentialsAction;
