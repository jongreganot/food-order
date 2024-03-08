import React, { Fragment } from "react";
import FoodCard from "../component/FoodCard.jsx";
import { foods } from "../service/FoodRepository.ts";

class FoodMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container py-5 my-3">
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    {
                        foods.map((food, index) => {
                            let foodOrderCount = this.props.foodOrder.foodOrderCounts.find(f => f.foodId === food.id);
                            return (
                                <FoodCard key={`FoodCard-${index}`}
                                        food={food} 
                                        parentAddFoodToBasket={this.props.parentAddFoodToBasket}
                                        foodOrderCount={foodOrderCount} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default FoodMenu;