// userReducer.js
import { SET_USER, FETCH_DATA, FETCH_DATA_SUCCESS } from "./action";

const initialState = {
    user: [],
    data: [],
    loading: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case FETCH_DATA:
            return {
                ...state,
                loading: true
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        default:
            return state;
    }
};

export default userReducer;
