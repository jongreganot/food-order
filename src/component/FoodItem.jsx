import React from "react";
import "../styles/text-styles.css"

class FoodItem extends React.Component {

    constructor(props) {
        super(props);

    }

    render () {
        return (
            <div className="col">
                <div className="card mb-4 py-2 px-1 rounded-3 shadow-sm">
                    <div className="d-flex flex-row justify-content-center p-3 align-items-start">
                        <div className="col-4">
                            <img src={this.props.food.image} className="d-block img-fluid"></img>
                        </div>
                        <div className="col-8 text-start px-4">
                            <p>{this.props.food.name}</p>
                            <p className="text-description">{this.props.food.description}</p>
                            <p className="fw-bold">{this.props.food.price.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    handleClick = () => {
        this.props.parentCallback();
    };
}

export default FoodItem;