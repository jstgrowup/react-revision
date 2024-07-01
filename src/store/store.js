import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// root reducer
import { rootReducer } from "./root-reducer";
const middlewares = [logger];
const composedEnhancers = compose(applyMiddleware(...middlewares));
export const store = createStore(rootReducer, undefined, composedEnhancers);
