import { actionTypes } from '../actions/actions';

const initialState = {
    loggedIn: false,
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOGIN: {
            state.loggedIn = true;
            window.localStorage.setItem("athenaLogin", JSON.stringify({"user": action.payload.user}))
            return state;
        } 
        default: {
            return state;
        }
    }
}