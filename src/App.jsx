import React from 'react';
import Layout from './pages/Layout';

class App extends React.Component {
  state = {
    numTrayItems: 0
  }

  handleCallBack = () => {
      this.setState({
          numTrayItems: this.state.numTrayItems += 1
      });
  }

  render () {
    return (
      <Layout parentCallback={this.handleCallBack} numTrayItems={this.state.numTrayItems} />
    )
  }
}

export default App;
