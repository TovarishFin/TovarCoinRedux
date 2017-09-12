import React, { Component } from 'react'

class FundForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      beneficiary: '',
      amount: ''
    }
  }

  onInputChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.beneficiary.length < 2)
    {
      return alert('Please fill in an address')
    }

    this.props.onFundFormSubmit(this.state.beneficiary, this.state.amount)

    this.setState({
      beneficiary: '',
      amount: ''
    })
  }

  render() {
    return(
      <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <label htmlFor="beneficiary">Beneficiary</label>
          <input id="beneficiary" type="text" value={this.state.beneficiary} onChange={this.onInputChange.bind(this)} placeholder="Beneficiary" />
          <span className="pure-form-message">This is a required field.</span>

          <br />

          <label htmlFor="amount">Amount</label>
          <input id="amount" type="number" value={this.state.amount} onChange={this.onInputChange.bind(this)} placeholder="Amount" />
          <span className="pure-form-message">This is a required field.</span>

          <br />

          <button type="submit" className="pure-button pure-button-primary">Buy Tokens</button>
        </fieldset>
      </form>
    )
  }
}

export default FundForm
