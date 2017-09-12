import React, { Component } from 'react';
import TovarCoinStatsContainer from '../../contracts/tovarCoin/tovarCoinStats/TovarCoinStatsContainer'

import TovarCoinFunctionSelectorContainer from '../../contracts/tovarCoin/ui/tovarCoinFunctionSelector/TovarCoinFunctionSelectorContainer'

class TovarCoin extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }

  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>TovarCoin</h1>
            <TovarCoinStatsContainer />
            <TovarCoinFunctionSelectorContainer />
          </div>
        </div>
      </main>
    )
  }

}

export default TovarCoin;
