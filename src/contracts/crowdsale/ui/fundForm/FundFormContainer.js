import { connect } from 'react-redux';
import FundForm from './FundForm';
import { fundCrowdsale } from './FundFormActions';

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFundFormSubmit: (beneficiary, amount) => {
      event.preventDefault();

      dispatch(fundCrowdsale(beneficiary, amount))
    }
  }
}

const FundFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FundForm)

export default FundFormContainer
