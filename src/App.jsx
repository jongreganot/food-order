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

  updateBasket = (price, foodOrderCount, arithmeticOperation) => {
    let existingFoodOrderCount = this.state.foodOrder.foodOrderCounts.find(f => f.foodId === foodOrderCount.foodId);
    let foodOrder = { ...this.state.foodOrder };
    let { totalAmount, numBasketItems } = this.state;

    if (!existingFoodOrderCount) {
      foodOrder.foodOrderCounts.push(foodOrderCount);
    }
    else {
      existingFoodOrderCount.orderCount = foodOrderCount.orderCount;
    }

    console.log(arithmeticOperation);

    this.setState({
      foodOrder,
      numBasketItems: arithmeticOperation === ArithmeticOperations.Addition ? numBasketItems + 1 : numBasketItems - 1,
      totalAmount: arithmeticOperation === ArithmeticOperations.Addition ? totalAmount + price : totalAmount - price,
      totalAmountFormatted: arithmeticOperation === ArithmeticOperations.Addition ? (totalAmount + price).toLocaleString('en-US', options) : (totalAmount - price).toLocaleString('en-US', options)
    });
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
        <Layout parentUpdateFoodToBasket={this.updateBasket} 
                numBasketItems={this.state.numBasketItems} 
                totalAmount={this.state.totalAmountFormatted}
                parentToggleBasket={this.toggleBasket}
                foodOrder={this.state.foodOrder} />
        
        { this.state.isBasketOut ? <Mask parentToggleBasket={this.toggleBasket} /> : '' }

        <Basket isBasketOut={this.state.isBasketOut} 
                foodOrder={this.state.foodOrder} 
                totalAmount={this.state.totalAmountFormatted}
                parentUpdateFoodToBasket={this.updateBasket} />
      </>
    )
  }
}

export default App;
