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
    
    switch (action.type) {
        case "LOGIN":
            var newState = Object.assign({}, state, {
                isUserLoggedIn: true
            });
            return newState;
        case "LOGOUT":
            var newState = Object.assign({}, state, {
                isUserLoggedIn: false
            });
            return newState;
    }

    return state;
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
  }

// export default createStore(rootReducer);