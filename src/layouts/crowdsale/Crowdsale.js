import React, { Component } from 'react'
import FundFormContainer from '../../contracts/crowdsale/ui/fundForm/FundFormContainer';
import CrowdsaleStatsContainer from '../../contracts/crowdsale/crowdsaleStats/CrowdsaleStatsContainer';

class Crowdsale extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Crowdsale</h1>
            <CrowdsaleStatsContainer/>
            <FundFormContainer/>
          </div>
        </div>
      </main>
    )
  }
}

export default Crowdsale
