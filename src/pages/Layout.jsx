import React from "react";
import '../styles/layout-styles.scss'
import { setLinkBehavior } from "../logic/ui/layout";
import { Link } from "react-router-dom";

class Layout extends React.Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setLinkBehavior();
    }

    render () {
        return (
            <section id="layout">
                <div className={`${this.props.isHideNavbar ? "d-none" : "d-block"} shadow py-3 navbar`}>
                    <div className="container">
                        <div className="d-flex flex-row align-items-center justify-content-between w-100">
                            <nav className="nav nav-underline d-flex flex-row justify-content-start">
                                <Link to="/food-order/popular" className="navbar-item px-3 pt-2 pb-1 active">Popular</Link>
                                <Link to="/food-order/about" className="navbar-item px-3 pt-2 pb-1">About Us</Link>
                            </nav>
                            <div className="d-flex flex-row align-items-center">
                                <div className={`${this.props.numBasketItems === 0 ? 'd-none' : 'd-inline'} fw-bold position-relative basket-item-counter d-flex flex-row justify-content-center align-items-center`}>
                                    <p className="text-notsosmall mb-0">{this.props.numBasketItems}</p>
                                </div>
                                <button className={`${this.props.numBasketItems === 0 ? 'basket-button-outline' : 'basket-button'} py-2 px-2 rounded-2`} onClick={() => this.props.pullBasket(true)}>
                                    <div className="d-flex flex-row align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-bag basket-dimensions" viewBox="0 0 16 16">
                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                                        </svg>
                                        {
                                            this.props.numBasketItems === 0 ?  ''
                                                : <p className="mb-0 fw-500 ms-2 text-medium">
                                                    <span className="text-large ms-1">₱</span>{this.props.totalAmount}
                                                </p>
                                        }
                                    </div>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
        
    
}

export default Layout;