import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export default createStore(
  combineReducers({
    voters: () => []
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
