import React from "react"
import { options } from "../constants/options";
import "../styles/component/basket-item-styles.scss";

class BasketItem extends React.Component {
   constructor(props) {
      super(props);
   }

   render () {

    let totalBasketItemAmount = (this.props.foodOrderCount.orderCount * this.props.food.price).toLocaleString('en-US', options);
    return (
        <div className="basket-grid-container py-4 border-bottom">
            <div className="content-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-dash-lg arithmetic-icon" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
                </svg>
            </div>
            <div className="content-center">
                <p className="text-medium mb-0">{this.props.foodOrderCount.orderCount}</p>
            </div>
            <div className="content-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-plus-lg arithmetic-icon" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                </svg>
            </div>
            <div className="content-center">
                <img src={this.props.food.image} className="food-item ps-1"></img>
            </div>
            <div className="d-flex flex-row align-items-center">
                <p className="text-notsosmall mb-0">{this.props.food.name}</p>
            </div>
            <div className="d-flex flex-row align-items-center">
                <p className="text-medium mb-0">{totalBasketItemAmount}</p>
            </div>
        </div>
     )
   };
}

export default BasketItem;
