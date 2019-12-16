import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../x_reducers/root.reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const enhance = compose(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);

export default function configureStore(initialState = {}) {
  const store = createStore(rootReducer, initialState, enhance);

  return store;
}
