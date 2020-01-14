import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "../reducers/root.reducer";

const initState = Object.assign({});

export const initializeStore = (preloadedState = initState) => {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
};
