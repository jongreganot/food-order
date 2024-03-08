import React from 'react';
import Layout from './pages/Layout';
import Mask from './component/Mask';
import Basket from './component/Basket';
import { FoodOrderCount } from './model/FoodOrderCount.ts';
import { FoodOrder } from './model/FoodOrder.ts';
import { options } from './constants/options.js';
import { ArithmeticOperations } from './constants/arithmetic-operations.js';

class App extends React.Component {
  state = {
    numBasketItems: 0,
    totalAmount: 0,
    totalAmountFormatted: "0.00",
    isMaskedOn: false,
    isBasketOut: false,
    foodOrder: new FoodOrder(1, [])
  }

  constructor() {
    super();
  }

  updateBasket = (food, arithmeticOperation) => {
    let existingFoodOrderCount = this.state.foodOrder.foodOrderCounts.find(f => f.foodId === food.id);
    let foodOrder = { ...this.state.foodOrder };
    let { totalAmount, numBasketItems } = this.state;

    if (!existingFoodOrderCount) {
      let foodOrderCount = new FoodOrderCount(food.id, 1);
      foodOrder.foodOrderCounts.push(foodOrderCount);
    }
    else {
      existingFoodOrderCount.orderCount = arithmeticOperation === ArithmeticOperations.Addition ? existingFoodOrderCount.orderCount + 1 : existingFoodOrderCount.orderCount - 1;
    }

    this.setState({
      foodOrder,
      numBasketItems: arithmeticOperation === ArithmeticOperations.Addition ? numBasketItems + 1 : numBasketItems - 1,
      totalAmount: arithmeticOperation === ArithmeticOperations.Addition ? totalAmount + food.price : totalAmount - food.price,
      totalAmountFormatted: arithmeticOperation === ArithmeticOperations.Addition ? (totalAmount + food.price).toLocaleString('en-US', options) : (totalAmount - food.price).toLocaleString('en-US', options)
    });
  }

  removeItem = (foodOrderCount) => {
    let foodOrder = { ...this.state.foodOrder };

    foodOrder.foodOrderCounts.splice(foodOrderCount, 1);

    this.setState({foodOrder});
  }

  toggleBasket = () => {
    this.setState({
        isBasketOut: !this.state.isBasketOut,
        isMaskedOn: !this.state.isMaskedOn
      }, () => {
      document.body.style.overflow = this.state.isMaskedOn ? "hidden" : "visible";
    });
  }

  render () {
    return (
      <>
        <Layout parentUpdateBasket={this.updateBasket} 
                numBasketItems={this.state.numBasketItems} 
                totalAmount={this.state.totalAmountFormatted}
                parentToggleBasket={this.toggleBasket}
                foodOrder={this.state.foodOrder} />
        
        { this.state.isBasketOut ? <Mask parentToggleBasket={this.toggleBasket} /> : '' }

        <Basket isBasketOut={this.state.isBasketOut} 
                foodOrder={this.state.foodOrder} 
                totalAmount={this.state.totalAmountFormatted}
                parentUpdateBasket={this.updateBasket}
                removeItem={this.removeItem} />
      </>
    )
  }
}

export default App;
