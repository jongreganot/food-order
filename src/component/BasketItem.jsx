import React from "react"
import { options } from "../constants/options";
import "../styles/component/basket-item-styles.scss";
import { ArithmeticOperations } from "../constants/arithmetic-operations.js";

class BasketItem extends React.Component {
    state = {
        totalBasketItemAmount: 0.00
    }

    constructor(props) {
        super(props);
    }

    handleOperation = (arithmeticOperation) => {
        let foodOrderCount = this.props.foodOrder.foodOrderCounts.find(foc => foc.foodId === this.props.food.id);

        if (arithmeticOperation === ArithmeticOperations.Subraction && foodOrderCount.orderCount === 0) 
            return;

        this.props.updateBasket(this.props.food, arithmeticOperation);
    }

    render () {
        let foodOrderCount = this.props.foodOrder.foodOrderCounts.find(foc => foc.foodId === this.props.food.id);
        let totalBasketItemAmount = foodOrderCount ? foodOrderCount.orderCount * this.props.food.price : 0;
        let totalBasketItemAmountAsString = totalBasketItemAmount.toLocaleString('en-US', options);
        return (
            <div className="basket-grid-container py-4 border-bottom user-select-none">
                <div className="content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-dash-lg arithmetic-icon" onClick={() => this.handleOperation(ArithmeticOperations.Subraction)} viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
                    </svg>
                </div>
                <div className="content-center">
                    <p className="text-medium mb-0">{foodOrderCount ? foodOrderCount.orderCount : 0}</p>
                </div>
                <div className="content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-plus-lg arithmetic-icon" onClick={() => this.handleOperation(ArithmeticOperations.Addition)} viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                    </svg>
                </div>
                <div className="content-center">
                    <img src={this.props.food.image} className="food-item ps-1"></img>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <p className="text-notsosmall mb-0">{this.props.food.name}</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                    {
                        totalBasketItemAmount === 0 ? <p className="text-medium text-danger mb-0 cursor-pointer" onClick={() => this.props.removeItem(this.props.foodOrderCount)}>Remove</p> : <p className="text-medium mb-0">{totalBasketItemAmountAsString}</p>
                    }
                    </div>
                </div>
            </div>
    )};
}

export default BasketItem;
