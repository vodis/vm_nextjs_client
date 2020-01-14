import { combineReducers } from "redux";
import { authReducer } from "../modules/users/reducers/auth.reducer";

export const rootReducer = combineReducers({
  authReducer
});

export type RootReducerType = ReturnType<typeof rootReducer>;
