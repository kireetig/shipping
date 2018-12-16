import React from 'react';
import '../../styles.scss';
import {CART} from "../constants/RouterConstants";

class HomeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.navigateToCart = this.navigateToCart.bind(this);
    }

    navigateToCart() {
        const route = {
            path: CART,
            keys: {},
            options: {},
        };
        this.props.navigateTo(route);
    }


    componentWillMount() {
        this.props.getItems();
    }

    render() {
        return (
            <div className={'container bg-light-blue'}>
                <h3 className={'text-center pt-3 heading-color'}>Welcome Shoppers</h3>
                <div className="row mt-5 pl-4 pr-4">
                    <div className="col-5 all-border">
                        <h5 className={'text-center'}>Name</h5>
                    </div>
                    <div className="col-2 all-border">
                        <h5 className={'text-center'}>Price</h5>
                    </div>
                    <div className="col-3 all-border">
                        <h5 className={'text-center'}>Weight</h5>
                    </div>
                    <div className="col-2 all-border">
                        <h5 className={'text-center'}>Select</h5>
                    </div>
                </div>
                {this.props.items.map((item, index) => {
                    return (<div className="row pl-4 pr-4" key={index}>
                        <div className="col-5 all-border">
                            <p className={'text-center'}>{item.name}</p>
                        </div>
                        <div className="col-2 all-border">
                            <p className={'text-center'}>${item.price}</p>
                        </div>
                        <div className="col-3 all-border">
                            <p className={'text-center'}>{item.weight} grams</p>
                        </div>
                        <div className="col-2 text-center all-border">
                            <input type="checkbox" onChange={() => this.props.updateCart(this.props.cartItems, item)}/>
                        </div>
                    </div>)
                })}
                <div className="row mt-4 pb-5">
                    <div className="col-12 text-center">
                        <button className="btn btn-primary col-5" onClick={this.navigateToCart}>Place Order</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeComponent;