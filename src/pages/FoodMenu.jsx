import React, { Fragment } from "react";
import FoodItem from "../component/FoodItem.jsx";
import { foods } from "../service/FoodRepository.ts";

class FoodMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Fragment>
                <div className="container py-5 my-3">
                    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        {
                            foods.map((food, index) => {
                                return (
                                    <FoodItem key={`fooditem-${index}`}
                                    food={food} 
                                    parentCallback={this.props.parentCallback} />
                                )
                            })
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default FoodMenu;