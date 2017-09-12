import { connect } from 'react-redux'
import CheckAllowance from './CheckAllowance'
import { getAllowance } from './CheckAllowanceActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckAllowanceFormSubmit: (owner, spender) => {
      event.preventDefault();
      dispatch(getAllowance(owner, spender))
    }
  }
}

const CheckAllowanceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckAllowance)

export default CheckAllowanceContainer
