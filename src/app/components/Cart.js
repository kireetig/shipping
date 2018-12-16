import React from 'react';
import '../../styles.scss';

let total = 0;

class CartComponent extends React.Component {

    componentDidMount() {
        if (this.props.cartItems.length > 0) {
            this.props.sortCart(this.props.cartItems);
        }
    }

    render() {
        return (
            <div className={'container bg-light-blue'}>
                <h3 className={'text-center pt-4 heading-color'}>CART</h3>
                {this.props.cartItems.length === 0 ? <div className="row mt-5">
                    <div className="col-12">
                        <h5 className={'text-center'}>No Items in Cart</h5>
                    </div>
                </div> : null}
                {this.props.cartItems.length > 0 ?
                    <div>
                        {this.props.cartItems.map((item, index) => {
                            let courierPrice = 0;
                            let weight = item.totalWeight;
                            if (weight <= 200) {
                                courierPrice = 5;
                            } else if (weight <= 500) {
                                courierPrice = 10;
                            } else if (weight <= 1000) {
                                courierPrice = 15;
                            } else if (courierPrice <= 5000) {
                                courierPrice = 20;
                            }
                            if(item.totalPrice !== undefined){
                                total = total + parseInt(item.totalPrice) + courierPrice;
                            }
                            return (<div className="row mt-5" key={index}>
                                <div className="col-12">
                                    <h5>Package - {index + 1}</h5>
                                </div>
                                <div className="col-12 mt-3">
                                    <p>Items - {item.name}</p>
                                    <p>Total weight - {weight}g</p>
                                    <p>Total price - ${item.totalPrice}</p>
                                    <p>Courier price - ${courierPrice}</p>
                                </div>
                            </div>)
                        })}
                        <div className="row mt-4">
                            <div className="col-12">
                                <h5>Total : {total}</h5>
                            </div>
                        </div>
                    </div> : null}
            </div>
        )
    }
}

export default CartComponent;