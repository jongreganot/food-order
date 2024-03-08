import React from 'react';
import Layout from './pages/Layout';
import Mask from './component/Mask';
import Basket from './component/Basket';
import { FoodOrderCount } from './model/FoodOrderCount.ts';
import { FoodOrder } from './model/FoodOrder.ts';
import { options } from './constants/options.js';

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

  addFoodToBasket = (price, foodOrderCount) => {
    let { numBasketItems, totalAmount, foodOrder } = this.state;
    this.setState({
        numBasketItems: numBasketItems += 1,
        totalAmount: totalAmount + price,
        totalAmountFormatted: (totalAmount + price).toLocaleString('en-US', options)
    });

    let existingFoodOrderCount = foodOrder.foodOrderCounts.find(f => f.foodId === foodOrderCount.foodId);

    if (!existingFoodOrderCount) {
      let foodOrder = { ...this.state.foodOrder };
      foodOrder.foodOrderCounts.push(foodOrderCount);

      this.setState({foodOrder});
    }
    else {
      let foodOrder = { ...this.state.foodOrder };
      existingFoodOrderCount.orderCount = foodOrderCount.orderCount;

      this.setState({foodOrder});
    }
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
        <Layout parentAddFoodToBasket={this.addFoodToBasket} 
                numBasketItems={this.state.numBasketItems} 
                totalAmount={this.state.totalAmountFormatted}
                parentToggleBasket={this.toggleBasket} />
        
        { this.state.isBasketOut ? <Mask parentToggleBasket={this.toggleBasket} /> : '' }

        <Basket isBasketOut={this.state.isBasketOut} foodOrder={this.state.foodOrder} totalAmount={this.state.totalAmountFormatted} />
      </>
    )
  }
}

export default App;
