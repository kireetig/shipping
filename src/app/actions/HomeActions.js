import {GET_ITEMS, UPDATE_CART} from '../constants/ActionTypes';
import * as apiUtils from '../utils/ApiUtils';
import {checkCart, sortCartPackage} from "../selectors/HomeSelector";

export const getItems = () => async (dispatch) => {
    const res = await apiUtils.getItems();
    if(res.status === 200){
        dispatch({
            type: GET_ITEMS,
            payload: res.data
        })
    }
};

export const updateCart = (items, item) => (dispatch) => {
    dispatch({
        type: UPDATE_CART,
        payload: checkCart(items, item)
    });
};

export const sortCart = (items) => (dispatch) => {
    dispatch({
        type: UPDATE_CART,
        payload: sortCartPackage(items)
    })
};