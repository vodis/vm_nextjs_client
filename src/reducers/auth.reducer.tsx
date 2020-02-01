import { AUTH_CREDENTIALS, AuthCredentialsTypes, AuthActionTypes } from "../interfaces/auth.interfaces";

interface AuthStoreTypes {
  credentials: AuthCredentialsTypes
}

const initialState: AuthStoreTypes = {
  credentials: {}
};

export function authReducer(state = initialState, action: AuthActionTypes): AuthStoreTypes {
  switch (action.type) {
    case AUTH_CREDENTIALS:
      return {
        ...state,
        credentials: action.payload,
      };
    default:
      return state;
  }
}
