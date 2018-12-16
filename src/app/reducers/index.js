import { combineReducers } from 'redux';
import cart from './cart';
import router from './router';

export default combineReducers({
    cart,
    router
});