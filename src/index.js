import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
// import store from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
  }

const initialState = {
    isUserLoggedIn: false
};

const rootReducer = (state = initialState, action) => {
    if (action.type === "LOGIN") {
        var newState = Object.assign({}, state, {
            isUserLoggedIn: true
        });
        return newState;
    } else if (action.type === "LOGOUT") {
        var newState = Object.assign({}, state, {
            isUserLoggedIn: false
        });
        return newState;
    }

    return state;
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer)
let persistor = persistStore(store)

ReactDom.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);