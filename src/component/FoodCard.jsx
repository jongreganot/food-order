import React from "react";
import "../styles/text-styles.scss"
import "../styles/food-card-styles.scss"

class FoodCard extends React.Component {

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
                        <div className="col-8 ps-4 pe-2">
                            <div className="text-start">
                                <p>{this.props.food.name}</p>
                                <p className="text-description">{this.props.food.description}</p>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="fw-bold">{this.props.food.price.toFixed(2)}</p>
                                    <div className="d-flex flex-row justify-content-end">
                                        <div className="add-to-tray-button d-flex flex-row justify-content-center align-items-center" onClick={this.props.parentCallback}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-plus-lg plus-sign pe-none" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                                            </svg>
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

    handleClick = () => {
        this.props.parentCallback();
    };
}

export default FoodCard;