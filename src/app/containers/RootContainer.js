import React from 'react';
import { connect } from 'react-redux';
import HomeContainer from './HomeContainer';
import Root from '../components/Root';
import { initRouter, navigateTo } from '../actions/RouterActions';
import {CART, INDEX_PATH} from "../constants/RouterConstants";
import CartContainer from "./CartContainer";


const RootContainer = props => <Root {...props} />;

const mapStateToProps = (state) => {
    const { router } = state;

    return {
        paths: [INDEX_PATH],
        router,
        routes: {
            [INDEX_PATH]: HomeContainer,
            [CART]: CartContainer
        },
    };
};

export default connect(mapStateToProps, {
    initRouter,
    navigateTo,
})(RootContainer);
