import reducer from "./reducers/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;// eslint-disable-line
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


export default store;