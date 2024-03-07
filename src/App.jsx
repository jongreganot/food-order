import React from 'react';
import Layout from './pages/Layout';

const options = {
  style: 'decimal',  // Other options: 'currency', 'percent', etc.
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

class App extends React.Component {
  state = {
    numTrayItems: 0,
    totalAmount: 0,
    totalAmountFormatted: "0.00"
  }

  handleCallBack = (price) => {
      this.setState({
          numTrayItems: this.state.numTrayItems += 1,
          totalAmount: this.state.totalAmount + price,
          totalAmountFormatted: (this.state.totalAmount + price).toLocaleString('en-US', options)
      });
  }

  render () {
    return (
      <Layout parentCallback={this.handleCallBack} 
              numTrayItems={this.state.numTrayItems} 
              totalAmount={this.state.totalAmountFormatted} />
    )
  }
}

export default App;
