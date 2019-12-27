import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { timerReducer, initialState } from "../reducers/timer.reducer";

const initState = Object.assign({}, initialState);

export const initializeStore = (preloadedState = initState) => {
  return createStore(
    timerReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
};
