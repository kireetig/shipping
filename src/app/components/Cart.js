import React from 'react';
import '../../styles.scss';

class CartComponent extends React.Component {

    componentWillMount() {
        this.props.sortCart(this.props.cartItems);
    }

    render() {
        return (
            <div className={'container'}>
                <h3 className={'text-center mt-4 heading-color'}>CART</h3>
                {this.props.cartItems.length === 0 ? <div className="row mt-5">
                    <div className="col-12">
                        <h5 className={'text-center'}>No Items in Cart</h5>
                    </div>
                </div> : null}
                {this.props.cartItems.length > 0 ?
                    this.props.cartItems.map((item, index) => {
                        return (<div className="row" key={index}>
                            <div className="col-5 all-border">
                                <p className={'text-center'}>{item.name}</p>
                            </div>
                            <div className="col-2 all-border">
                                <p className={'text-center'}>{item.price}</p>
                            </div>
                            <div className="col-2 all-border">
                                <p className={'text-center'}>{item.weight}</p>
                            </div>
                        </div>)
                    }) : null}
            </div>
        )
    }
}

export default CartComponent;