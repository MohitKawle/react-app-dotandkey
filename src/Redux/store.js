import {
    legacy_createStore,
    combineReducers, applyMiddleware,
    compose
} from "redux";

import thunk from "redux-thunk"

import productReducer from './products/Reducer'

const rootReducer = combineReducers({ ecommerceData: productReducer })

const composeEnhancers =window._REDUX_DEVTOOLS_XTENSION_ || compose;
                         //window.__REDUX_DEVTOOLS_EXTENSION-_
                         // 

export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));