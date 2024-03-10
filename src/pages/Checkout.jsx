import OrderSummary from "../component/OrderSummary";
import React, { Component } from 'react';

class Checkout extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <div className="bg-body-tertiary">
                <div className="container px-4 my-5">
                    <OrderSummary updateBasket={this.props.updateBasket}
                                    removeItem={this.props.removeItem}
                                    foodOrder={this.props.foodOrder} />
                </div>
            </div>
        );
    }
}
 
export default Checkout;