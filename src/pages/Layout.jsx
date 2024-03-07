import React from "react";
import '../styles/layout-styles.scss'
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from "react-router-dom";
import FoodMenu from "./FoodMenu";
import AboutUs from "./AboutUs";
import { setLinkBehavior } from "../logic/ui/layout";

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setLinkBehavior();
    }

    render () {
        return (
            <Router>
                <section id="layout">
                    <div className="shadow py-3">
                        <div className="container">
                            <div className="d-flex flex-row align-items-center justify-content-between">
                                <nav className="nav nav-underline d-flex flex-row justify-content-start">
                                    <Link to="/food-order/popular" className="navbar-item px-3 pt-2 pb-1 active">Popular</Link>
                                    <Link to="/food-order/about" className="navbar-item px-3 pt-2 pb-1">About Us</Link>
                                </nav>
                                <div className="d-flex flex-row align-items-center">
                                    <div className={`${this.props.numTrayItems === 0 ? 'd-none' : 'd-inline'} fw-bold position-relative tray-item-counter d-flex flex-row justify-content-center align-items-center`}>
                                        <p className="text-notsosmall mb-0">{this.props.numTrayItems}</p>
                                    </div>
                                    <button className={`${this.props.numTrayItems === 0 ? 'tray-button-outline' : 'tray-button'} py-2 px-2 rounded-2`}>
                                        <div className="d-flex flex-row align-items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-inbox tray-dimensions" viewBox="0 0 16 16">
                                                <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z"/>
                                            </svg> 
                                            {this.props.numTrayItems === 0 ?  ''
                                                : <p className="mb-0 fw-500 ms-2 text-medium">
                                                    <span className="text-large ms-1">₱</span>{this.props.totalAmount}
                                                </p>}
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Routes>
                            <Route index element={<FoodMenu parentCallback={this.props.parentCallback} />} ></Route>
                            <Route
                                exact
                                path="/"
                                element={<FoodMenu parentCallback={this.props.parentCallback} />}
                            ></Route>
                            <Route
                                exact
                                path="/food-order/popular"
                                element={<FoodMenu parentCallback={this.props.parentCallback} />}
                            ></Route>
                            <Route
                                exact
                                path="/food-order/about"
                                element={<AboutUs />}
                            ></Route>
                        </Routes>
                    </div>
                </section>
            </Router>
        )
    }
        
    
}

export default Layout;