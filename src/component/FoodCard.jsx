import React from "react";
import "../styles/text-styles.scss"
import "../styles/component/food-card-styles.scss"
import { FoodOrderCount } from "../model/FoodOrderCount.ts";

class FoodCard extends React.Component {

    state = {
        basketClass: "add-to-basket-button",
        foodOrderCount: new FoodOrderCount(0, 0)
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.foodOrderCount && this.props.foodOrderCount.foodId != 0) {
            let foodOrderCount = { ...this.state.foodOrderCount };
            foodOrderCount = this.props.foodOrderCount;
            this.setState({foodOrderCount});
            
            if (this.props.foodOrderCount.orderCount > 0) {
                this.setState({
                    basketClass: "add-to-basket-button-outline",
                });
            }
        }
    }

    addToCart() {
        this.setState({
            basketClass: "add-to-basket-button-outline",
        });

        let foodOrderCount = { ...this.state.foodOrderCount };
        foodOrderCount.orderCount =  foodOrderCount.orderCount += 1;

        if(foodOrderCount.foodId === 0) {
            foodOrderCount.foodId = this.props.food.id;
        }
        
        this.setState({foodOrderCount}, () => {
            this.props.parentAddFoodToBasket(this.props.food.price, this.state.foodOrderCount);
        });
    }

    render () {
        let { basketClass, foodOrderCount } = this.state;
        return (
            <div className="col user-select-none">
                <div className={`card mb-4 py-2 px-1 rounded-3 shadow-sm ${foodOrderCount.orderCount > 0 ? 'selected' : ''}`}>
                    <div className="d-flex flex-row justify-content-center px-3 py-2 align-items-start">
                        <div className="col-4">
                            <img src={this.props.food.image} className="d-block img-fluid"></img>
                        </div>
                        <div className="col-8 ps-4 pe-2">
                            <div className="text-start">
                                <p>{this.props.food.name}</p>
                                <p className="text-description text-medium">{this.props.food.description}</p>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="fw-bold">{this.props.food.price.toFixed(2)}</p>
                                    <div className="d-flex flex-row justify-content-end">
                                        <div className={`${basketClass} add-to-basket d-flex flex-row justify-content-center align-items-center`} onClick={() => this.addToCart()}>
                                            { (foodOrderCount.orderCount > 0) ? 
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