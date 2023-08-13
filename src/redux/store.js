import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga"
import userReducer from "./reducer";
import rootsaga from "./saga";

const sagaMiddleWare = createSagaMiddleware()
const root = combineReducers({ userReducer })

export default store = createStore(root, applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(rootsaga)