import { connect } from 'react-redux'
import TovarCoinStats from './TovarCoinStats'
import { getStats } from './TovarCoinStatsActions'

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state.tovarCoin)
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTovarCoinLoaded: () => {
      dispatch(getStats())
    }
  }
}

const TovarCoinStatsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TovarCoinStats)

export default TovarCoinStatsContainer
