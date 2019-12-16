import { User } from "../interfaces/user.interfaces";
import {
  AUTH_LOGIN,
  AUTH_SIGNIN,
  AUTH_LOGOUT,
  AuthActionTypes
} from "../interfaces/auth.interfaces";

export function authLogin(user: User): AuthActionTypes {
  return {
    type: AUTH_LOGIN,
    payload: user
  };
}

export function authSignin(user: User): AuthActionTypes {
  return {
    type: AUTH_SIGNIN,
    payload: user
  };
}

export function authLogout(): AuthActionTypes {
  return {
    type: AUTH_LOGOUT
  };
}
