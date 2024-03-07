import React from 'react';
import Layout from './pages/Layout';
import Mask from './component/Mask';
import Basket from './component/Basket';

const options = {
  style: 'decimal',  // Other options: 'currency', 'percent', etc.
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

class App extends React.Component {
  state = {
    numBasketItems: 0,
    totalAmount: 0,
    totalAmountFormatted: "0.00",
    isMaskedOn: false
  }

  addFoodToBasket = (price) => {
    this.setState({
        numBasketItems: this.state.numBasketItems += 1,
        totalAmount: this.state.totalAmount + price,
        totalAmountFormatted: (this.state.totalAmount + price).toLocaleString('en-US', options)
    });
  }

  toggleMask = () => {
    this.setState({
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
                parentToggleMask={this.toggleMask} />
        
        { this.state.isMaskedOn ? <Mask parentToggleMask={this.toggleMask} /> : '' }

        <Basket isMaskedOn={this.state.isMaskedOn} />
      </>
    )
  }
}

export default App;
