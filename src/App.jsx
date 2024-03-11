import React from 'react';
import Layout from './pages/Layout';
import Mask from './component/Mask';
import Basket from './component/Basket';
import { FoodOrderCount } from './model/FoodOrderCount.ts';
import { FoodOrder } from './model/FoodOrder.ts';
import { options } from './constants/options.js';
import { ArithmeticOperations } from './constants/arithmetic-operations.js';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Navigate
} from "react-router-dom";
import FoodMenu from './pages/FoodMenu.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Checkout from './pages/Checkout.jsx';
import { foods } from './service/FoodRepository.ts';

class App extends React.Component {
  state = {
    numBasketItems: 0,
    totalAmount: 0,
    totalAmountFormatted: "0.00",
    isMaskedOn: false,
    isBasketOut: false,
    foodOrder: new FoodOrder(1, []),
    isCheckout: false
  }

  constructor() {
    super();
  }

  updateBasket = (food, arithmeticOperation) => {
    let existingFoodOrderCount = this.state.foodOrder.foodOrderCounts.find(f => f.foodId === food.id);
    let foodOrder = { ...this.state.foodOrder };
    let { totalAmount } = this.state;

    if (!existingFoodOrderCount) {
      let foodOrderCount = new FoodOrderCount(food.id, 1);
      foodOrder.foodOrderCounts.push(foodOrderCount);
    }
    else {
      existingFoodOrderCount.orderCount = arithmeticOperation === ArithmeticOperations.Addition ? existingFoodOrderCount.orderCount + 1 : existingFoodOrderCount.orderCount - 1;
    }

    this.setState({
      foodOrder,
    }, () => {
      this.updateNumBasketItems();
      this.updateTotalAmount();
    });
  }

  updateNumBasketItems() {
    this.setState({
      numBasketItems: this.getTotalNumItemsBasket(),
    });
  }

  getTotalAmount() {
    let totalAmount = 0;

    this.state.foodOrder.foodOrderCounts.map(foc => {
      let food = foods.find(f => f.id === foc.foodId);
      totalAmount += food.price * foc.orderCount;
    });

    return totalAmount;
  }

  updateTotalAmount() {
    this.setState({
      totalAmount: this.getTotalAmount(),
      totalAmountFormatted: this.getTotalAmount().toLocaleString('en-US', options)
    });
  }

  getTotalNumItemsBasket() {
    let totalNumberItems = 0;

    this.state.foodOrder.foodOrderCounts.map(foc => {
      totalNumberItems += foc.orderCount;
    });

    return totalNumberItems;
  }

  removeItem = (food) => {
    let foodOrder = { ...this.state.foodOrder };
    let foodOrderCount = foodOrder.foodOrderCounts.find(foc => foc.foodId === food.id);
    let index = foodOrder.foodOrderCounts.indexOf(foodOrderCount);
    foodOrder.foodOrderCounts.splice(index, 1);

    this.setState({foodOrder});
  }

  pullBasket = (basketOut) => {
    this.setState({
        isBasketOut: basketOut,
        isMaskedOn: basketOut
      }, () => {
      document.body.style.overflow = this.state.isMaskedOn ? "hidden" : "visible";
    });

    if (!basketOut) {
      let foodOrder = { ...this.state.foodOrder };
      let foodOrderCounts = foodOrder.foodOrderCounts.filter(foc => foc.orderCount === 0);
      foodOrderCounts.map(foc => foc.orderCount = 1);

      this.setState({foodOrder}, () => {
        this.updateNumBasketItems();
        this.updateTotalAmount();
      });
    }
  }

  checkout = (isCheckout) => {
    this.setState({
      isCheckout: isCheckout
    });

    if (this.state.foodOrder.foodOrderCounts.length > 0 && !isCheckout)
      this.pullBasket(true);

    if (isCheckout)
      this.pullBasket(false);
  }

  render () {
    return (
      <Router>
        <Layout updateBasket={this.updateBasket} 
                numBasketItems={this.state.numBasketItems} 
                totalAmount={this.state.totalAmountFormatted}
                pullBasket={this.pullBasket}
                foodOrder={this.state.foodOrder}
                isCheckout={this.state.isCheckout} />
        
        <Routes>
            <Route
                exact
                path="/food-order/popular"
                element={<FoodMenu updateBasket={this.updateBasket} foodOrder={this.state.foodOrder} checkout={this.checkout} />}></Route>
            <Route
                exact
                path="/food-order/about"
                element={<AboutUs />}></Route>
            <Route path="/food-order" element={<Navigate replace to="/food-order/popular" />} />
            <Route
                exact
                path="/food-order/checkout"
                element={<Checkout foodOrder={this.state.foodOrder}
                                    updateBasket={this.updateBasket}
                                    removeItem={this.removeItem}
                                    totalAmount={this.state.totalAmountFormatted} />}></Route>
        </Routes>
        
        { this.state.isBasketOut ? <Mask pullBasket={this.pullBasket} /> : '' }

        <Basket isBasketOut={this.state.isBasketOut} 
                foodOrder={this.state.foodOrder} 
                totalAmount={this.state.totalAmountFormatted}
                updateBasket={this.updateBasket}
                removeItem={this.removeItem}
                checkout={this.checkout} />
      </Router>
    )
  }
}

export default App;
