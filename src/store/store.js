import {applyMiddleware, legacy_createStore as createStore } from "redux";
import rooteReducer from "./reducer/combian";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";




const store = createStore(rooteReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;