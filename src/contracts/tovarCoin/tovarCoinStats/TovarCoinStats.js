import React, { Component } from 'react'

class TovarCoinStats extends Component {

  componentWillMount() {
    this.props.onTovarCoinLoaded();
  }

  render() {
    return(
      <div>
        <p>Coin Name: {this.props.name}</p>
        <p>TovarCoin Adress: {this.props.address}</p>
        <p>Owner Address: {this.props.owner}</p>
        <p>Token Symbol: {this.props.symbol}</p>
        <p>Total Supply: {this.props.totalSupply}</p>
        <p>Decimal Denomination: {this.props.decimals}</p>
        <p>Minting Finished? {this.props.mintingFinished ? 'YES' : 'NO'}</p>
      </div>
    )
  }
}

export default TovarCoinStats
