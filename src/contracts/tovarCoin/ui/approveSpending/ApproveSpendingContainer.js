import { connect } from 'react-redux'
import ApproveSpending from './ApproveSpending'
import { approveSpending } from './ApproveSpendingActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onApproveSpendingFormSubmit: (spender, amount) => {
      event.preventDefault();
      dispatch(approveSpending(spender, amount))
    }
  }
}

const ApproveSpendingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApproveSpending)

export default ApproveSpendingContainer
