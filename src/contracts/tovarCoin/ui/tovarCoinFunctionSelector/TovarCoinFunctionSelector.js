import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import ApproveSpendingContainer from '../approveSpending/ApproveSpendingContainer'
import CheckAllowanceContainer from '../checkAllowance/CheckAllowanceContainer'


class TovarCoinFunctionSelector extends Component {

  render() {

    let displayedElement = () => {
      switch(this.props.selectedTovarCoinFunction) {
        case 'approve':
          return (<ApproveSpendingContainer />)

        case 'allowance':
          return (<CheckAllowanceContainer />)

        default:
          return (<p>No Function Selected</p>)
      }
    }

    return (
      <div>

        <SelectField
          floatingLabelText="Select Token Function"
          value={this.props.selectedTovarCoinFunction}
          onChange={this.props.handleTovarCoinFunctionChange}
        >
          <MenuItem value="approve" primaryText="Approve Allowance for Spender"></MenuItem>
          <MenuItem value="allowance" primaryText="Check Allowance for Spender"></MenuItem>
        </SelectField>

        {displayedElement()}

      </div>

    )
  }

}

export default TovarCoinFunctionSelector;
