import { connect } from 'react-redux';
import CrowdsaleStats from './CrowdsaleStats';
import { getStats } from './CrowdsaleStatsActions';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state.crowdsale)
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHomeLoaded: () => {
      dispatch(getStats())
    }
  }
}

const CrowdsaleStatsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CrowdsaleStats)

export default CrowdsaleStatsContainer
