import { User } from "../interfaces/user.interfaces";
import {
  AUTH_LOGIN,
  AUTH_SIGNIN,
  AUTH_LOGOUT,
  AuthActionTypes
} from "../interfaces/auth.interfaces";

const initialState: User = {
  firstName: "Guest",
  secondName: "",
  email: "",
  password: ""
};

export function authReducer(
  state = initialState,
  action: AuthActionTypes
): User {
  switch (action.type) {
    case AUTH_LOGIN:
      return action.payload;
    case AUTH_SIGNIN:
      return action.payload;
    default:
      return state;
  }
}
