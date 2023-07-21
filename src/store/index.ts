import { createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers";

const rootReducer = combineReducers({ counter: counterReducer });

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
