import React from "react"
import "../styles/basket-styles.scss";
import { foods } from "../service/FoodRepository.ts";
import BasketItem from "./BasketItem.jsx";
import { Link } from "react-router-dom";


class Basket extends React.Component {
   constructor(props) {
      super(props);
   }

   render () {
     return (
      <div className={`basket ${this.props.isBasketOut ? 'active' : ''}`}>
        <div className="d-flex flex-column justify-content-between h-100">
          <div className="overflow-auto">
            <div className="d-flex flex-row justify-content-start align-items-center pt-3 pb-2 border-bottom">
              <div className="col-2 d-flex flex-row ps-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x close-button" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </div>
              <div className={`d-flex flex-column align-items-center col-8`}>
                <p className="text-notsolarge fw-bold mb-0">Basket</p>
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-clock clock-icon" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                  </svg>
                  <p className="ms-2 text-medium text-description mb-0">Delivery time: 15 min (0.1 km away)</p>
                </div>
              </div>
            </div>

            <div className="mt-5 food-items-section">
              <div className="border-bottom w-100"></div>
              {
                this.props.foodOrder.foodOrderCounts.map((foodOrderCount, index) => {
                  let food = foods.find(f => f.id === foodOrderCount.foodId);
                  
                  return (
                    <BasketItem key={`basketitem-${index}`}
                      foodOrder={this.props.foodOrder}
                      food={food}
                      updateBasket={this.props.updateBasket}
                      removeItem={this.props.removeItem} />
                  );
                })
              }

            </div>
          </div>
          
          <div className="px-4 py-3 total-amount-section">
            <div className="d-flex flex-row justify-content-between">
              <p className="text-large fw-bold">Total</p>
              <p className="text-large fw-bold">₱ {this.props.totalAmount}</p>
            </div>
            <Link to="/food-order/checkout" className="checkout-link" onClick={() => this.props.checkout(true)}>
              <div className="content-center">Checkout</div>
            </Link>
          </div>

        </div>
        
      </div>
     )
   };
}

export default Basket;
