import React from 'react';
import { connect } from 'react-redux';
import HomeComponent from '../components/Home';


const HomeContainer = props => <HomeComponent {...props} />;

const mapStateToProps = state => ({
    cartItems: state.cart.items,
});

export default connect(mapStateToProps, {

})(HomeContainer);
