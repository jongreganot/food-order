import React from "react";
import '../styles/layout-styles.css'
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
                    <div className="shadow py-2">
                        <div className="container">
                            <div className="d-flex flex-row align-items-center justify-content-between">
                                <nav className="nav nav-underline d-flex flex-row justify-content-start">
                                    <Link to="/popular" className="navbar-item px-3 pt-2 pb-1 active">Popular</Link>
                                    <Link to="/about" className="navbar-item px-3 pt-2 pb-1">About Us</Link>
                                </nav>
                                <div>
                                    <span className={`${this.props.numCartItems === 0 ? 'd-none' : 'd-inline'} badge text-bg-primary`}>{this.props.numCartItems}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-inbox-fill cart-dimensions cart-color" viewBox="0 0 16 16">
                                        <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Routes>
                            <Route index element={<FoodMenu parentCallback={this.props.parentCallback} />} ></Route>
                            <Route
                                exact
                                path="/popular"
                                element={<FoodMenu parentCallback={this.props.parentCallback} />}
                            ></Route>
                            <Route
                                exact
                                path="/about"
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