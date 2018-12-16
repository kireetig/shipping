import React from 'react';
import { connect } from 'react-redux';
import HomeComponent from '../components/Home';
import {getItems, updateCart} from "../actions/HomeActions";
import {navigateTo} from "../actions/RouterActions";


const HomeContainer = props => <HomeComponent {...props} />;

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
    items: state.cart.items
});

export default connect(mapStateToProps, {
    getItems: getItems,
    updateCart: updateCart,
    navigateTo: navigateTo
})(HomeContainer);
