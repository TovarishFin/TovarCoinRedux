import React, { Component } from 'react'

class CrowdsaleStats extends Component {

  componentWillMount() {
    this.props.onHomeLoaded();
  }

  render() {
    return(
      <div>
        <p>End Block: {this.props.endBlock}</p>
        <p>Crowdfunding has Ended: {this.props.hasEnded ? 'YES' : 'NO'}</p>
        <p>Rate: {this.props.rate}</p>
        <p>Start Block: {this.props.startBlock}</p>
        <p>Token Address: {this.props.token}</p>
        <p>Funding Wallet Address: {this.props.wallet}</p>
        <p>Wei Raised as of Now: {this.props.weiRaised}</p>
      </div>
    )
  }
}

export default CrowdsaleStats
