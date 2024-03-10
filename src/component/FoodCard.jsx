import React from "react";
import "../styles/text-styles.scss"
import "../styles/component/food-card-styles.scss"
import { ArithmeticOperations } from "../constants/arithmetic-operations.js";

class FoodCard extends React.Component {

    constructor(props) {
        super(props);
    }

    addToCart() {
        this.props.updateBasket(this.props.food, ArithmeticOperations.Addition);
    }

    render () {
        let foodOrderCount = this.props.foodOrder.foodOrderCounts.find(foc => foc.foodId === this.props.food.id);
        return (
            <div className="col user-select-none">
                <div className={`card mb-4 py-3 px-1 rounded-3 shadow-sm ${foodOrderCount && foodOrderCount.orderCount > 0 ? 'selected' : ''}`}>
                    <div className="d-flex flex-row justify-content-center px-3 py-2 align-items-start h-100">
                        <div className="col-4">
                            <img src={this.props.food.image} className="d-block img-fluid"></img>
                        </div>
                        <div className="col-8 ps-4 pe-2 h-100">
                            <div className="text-start d-flex flex-column justify-content-between h-100">
                                <div className="h-90">
                                    <p>{this.props.food.name}</p>
                                    <p className="text-description text-medium">{this.props.food.description}</p>
                                </div>

                                <div className="d-flex flex-row justify-content-between align-items-center h-10">
                                    <p className="fw-bold mb-0">{this.props.food.price.toFixed(2)}</p>
                                    <div className="d-flex flex-row justify-content-end">
                                        <div className={`${foodOrderCount && foodOrderCount.orderCount > 0 ? "add-to-basket-button-outline" : "add-to-basket-button"} add-to-basket d-flex flex-row justify-content-center align-items-center`} onClick={() => this.addToCart()}>
                                            { 
                                                foodOrderCount && foodOrderCount.orderCount > 0 ? 
                                                    <p className="mb-0 text-small">{foodOrderCount.orderCount}</p>
                                                    :
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-plus-lg plus-sign pe-none" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                                                    </svg> 
                                            }
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FoodCard;