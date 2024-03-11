import React, { Component } from 'react';
import "../styles/check-out-styles.scss";
import { foods } from '../service/FoodRepository.ts';
import BasketItem from './BasketItem';

class OrderSummary extends Component {
    render() { 
        return (
        <div className="rounded-3">
            <div className="d-flex flex-column align-items-center py-5">
                <div className="checkout-page-item">
                    <p className="fw-bold text-large mb-0 py-3">Order Summary</p>
                    <div className="border-bottom w-100"></div>
                    {
                        this.props.foodOrder.foodOrderCounts.map((foodOrderCount, index) => {
                            let food = foods.find(f => f.id === foodOrderCount.foodId);
                            
                            return (
                              <BasketItem key={`basketitem-ordersummary-${index}`}
                                foodOrder={this.props.foodOrder}
                                food={food}
                                updateBasket={this.props.updateBasket}
                                removeItem={this.props.removeItem} />
                            );
                          })
                    }
                    <div className="d-flex flex-row justify-content-between pt-3">
                        <p className="text-notsolarge mb-0">Sub-total</p>
                        <p className="text-notsolarge mb-0">₱ {this.props.totalAmount}</p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
 
export default OrderSummary;