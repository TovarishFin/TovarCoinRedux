import { connect } from 'react-redux'
import TovarCoinFunctionSelector from './TovarCoinFunctionSelector'
import { selectContractFunction } from './TovarCoinFunctionSelectorActions'

const mapStateToProps = (state, ownProps) => {
  return {
    selectedTovarCoinFunction: state.tovarCoin.selectedTovarCoinFunction
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleTovarCoinFunctionChange: (e, i, v) => {
      event.preventDefault();
      dispatch(selectContractFunction(e, i, v))
    }
  }
}

const TovarcoinFunctionSelectorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TovarCoinFunctionSelector)

export default TovarcoinFunctionSelectorContainer
