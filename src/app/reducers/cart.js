import {GET_ITEMS, UPDATE_CART} from "../constants/ActionTypes";

const initialState = {
    items: [],
    cartItems: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_CART:
            return {
                ...state,
                cartItems: action.payload
            };
        case GET_ITEMS:
            return {
                ...state,
                cartItems: [],
                items: action.payload
            };
        default:
            return state;
    }
}