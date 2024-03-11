import React, { Fragment } from "react";
import FoodCard from "../component/FoodCard.jsx";
import { foods } from "../service/FoodRepository.ts";

class FoodMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.foodOrder.foodOrderCounts.length > 0)
            this.props.pullBasket(true);
    }

    componentWillUnmount() {
        this.props.pullBasket(false);
        this.props.fixRemovedItems();
    }

    render() {
        return (
            <div className="container py-5 mb-3 mt-5">
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    {
                        foods.map((food, index) => {
                            return (
                                <FoodCard key={`FoodCard-${index}`}
                                        food={food} 
                                        updateBasket={this.props.updateBasket}
                                        foodOrder={this.props.foodOrder} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default FoodMenu;