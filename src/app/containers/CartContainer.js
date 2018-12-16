import React from 'react';
import { connect } from 'react-redux';
import {navigateTo} from "../actions/RouterActions";
import CartComponent from "../components/Cart";
import {sortCart} from "../actions/HomeActions";


const CartContainer = props => <CartComponent {...props} />;

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, {
    navigateTo: navigateTo,
    sortCart: sortCart
})(CartContainer);