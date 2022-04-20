import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { productoReducer } from "../reducers/productoReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers ( {
  login: loginReducer,
  producto: productoReducer
})

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
