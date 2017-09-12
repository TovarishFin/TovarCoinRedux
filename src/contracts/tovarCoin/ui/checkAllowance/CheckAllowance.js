import React, { Component } from 'react'

class CheckAllowance extends Component {
  constructor(props) {
    super(props)

    this.state = {
      owner: '',
      spender: ''
    }
  }

  onInputChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.owner.length < 2)
    {
      return alert('Please fill in an address')
    }

    this.props.onCheckAllowanceFormSubmit(this.state.owner, this.state.spender)

    this.setState({
      owner: '',
      spender: ''
    })
  }

  render() {
    return(
      <main>
        <h2>Check Allowance</h2>
        <p>Check which address owners have given approval to specific spender addresses.</p>
          <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
            <fieldset>

              <label htmlFor="owner">Owner</label>
              <input id="owner" type="text" value={this.state.owner} onChange={this.onInputChange.bind(this)} placeholder="Owner" />
              <span className="pure-form-message">This is a required field.</span>

              <br />

              <label htmlFor="spender">Spender</label>
              <input id="spender" type="text" value={this.state.spender} onChange={this.onInputChange.bind(this)} placeholder="Spender" />
              <span className="pure-form-message">This is a required field.</span>

              <br />

              <button type="submit" className="pure-button pure-button-primary">Check Allowance</button>
            </fieldset>
          </form>
      </main>
    )
  }
}

export default CheckAllowance
