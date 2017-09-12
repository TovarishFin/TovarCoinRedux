import React, { Component } from 'react'

class ApproveSpending extends Component {
  constructor(props) {
    super(props)

    this.state = {
      spender: '',
      amount: ''
    }
  }

  onInputChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.spender.length < 2)
    {
      return alert('Please fill in an address')
    }

    this.props.onApproveSpendingFormSubmit(this.state.spender, this.state.amount)

    this.setState({
      spender: '',
      amount: ''
    })
  }

  render() {
    return(
      <main>
        <h2>Approve Spending</h2>
        <p>Approve another account to spend your tokens on your behalf. This is an ERC20 standard function used with exchanges.</p>
          <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
            <fieldset>
              <label htmlFor="spender">Spender</label>
              <input id="spender" type="text" value={this.state.spender} onChange={this.onInputChange.bind(this)} placeholder="Spender" />
              <span className="pure-form-message">This is a required field.</span>

              <br />

              <label htmlFor="amount">Amount</label>
              <input id="amount" type="number" value={this.state.amount} onChange={this.onInputChange.bind(this)} placeholder="Amount" />
              <span className="pure-form-message">This is a required field.</span>

              <br />

              <button type="submit" className="pure-button pure-button-primary">Approve Spending</button>
            </fieldset>
          </form>
      </main>
    )
  }
}

export default ApproveSpending
