import React, { Fragment } from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import FoodMenu from './pages/FoodMenu';
// import AboutUs from './pages/AboutUs';
import Layout from './pages/Layout';

class App extends React.Component {
  state = {
    numCartItems: 0
  }

  handleCallBack = () => {
      this.setState({
          numCartItems: this.state.numCartItems += 1
      });
  }

  render () {
    return (
      <Layout parentCallback={this.handleCallBack} numCartItems={this.state.numCartItems} />
    )
  }
}

export default App;
