import { createStore } from "redux";


const initialState = {
    isUserLoggedIn: false
};

const rootReducer = (state = initialState, action) => {
    if (action.type === "LOGIN") {
        var newState = Object.assign({}, state, {
            isUserLoggedIn: true
        });
        return newState;
    }

    return state;
}

export default createStore(rootReducer);