import { combineReducers } from "redux";
import { timerReducer } from "./timer.reducer";

export const rootReducer = combineReducers({
  timerReducer
});

export type RootReducerType = ReturnType<typeof rootReducer>;
