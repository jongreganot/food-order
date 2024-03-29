import { Link } from "react-router-dom";
import OrderSummary from "../component/OrderSummary";
import React, { Component } from 'react';

class Checkout extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setIsPageCheckout(true);
    }

    componentWillUnmount() {
        this.props.setIsPageCheckout(false);
    }

    render() { 
        return (
            <div>
                <div className="d-flex flex-column bg-body-tertiary vh-100">
                    <div className="bg-white">
                        <div className="container px-4">
                            <div className="d-flex flex-column align-items-center justify-content-start pt-5 pb-3">
                                <div className="checkout-page-item text-md-start text-center ps-0">
                                    <p className="text-title mb-0 fw-bold">Last Step - Checkout</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container px-4 pb-5">
                            <OrderSummary updateBasket={this.props.updateBasket}
                                            removeItem={this.props.removeItem}
                                            foodOrder={this.props.foodOrder}
                                            totalAmount={this.props.totalAmount} />
                        </div>
                    </div>
                </div>
                <div className="shadow total-amount-checkout-section">
                    <div className="d-flex flex-column align-items-center justify-content-start">
                        <div className="checkout-page-item ps-0 d-flex flex-row justify-content-between align-items-center">
                            <div>
                                <p className="mb-0 text-large">Total</p>
                                <p className="mb-0 text-large fw-bold">₱ {this.props.totalAmount}</p>
                            </div>
                            <div>
                                <Link to="/food-order/thank-you" className="order-link">
                                    <div className="content-center">Place Order</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Checkout;