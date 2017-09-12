import store from '../../../store'
import co from 'co';
import * as contractUtil from '../../../util/contractUtil'

export const GOT_CROWDSALE_STATS = 'GOT_CROWDSALE_STATS'
function gotCrowdsaleStats(crowdsaleStats) {
  return {
    type: GOT_CROWDSALE_STATS,
    payload: crowdsaleStats
  }
}

export function getStats() {
  let web3 = store.getState().web3.web3Instance

  // Double-check web3's status.
  if (typeof web3 !== 'undefined') {

    return function(dispatch) {
      co(function* () {

        let crowdsaleInstance = yield contractUtil.getCrowdsaleInstance(web3)

        let crowdsaleStats = {
          endBlock: web3.toBigNumber(yield crowdsaleInstance.endBlock()).toString(),
          hasEnded: yield crowdsaleInstance.hasEnded(),
          rate: web3.toBigNumber(yield crowdsaleInstance.rate()).toString(),
          startBlock: web3.toBigNumber(yield crowdsaleInstance.startBlock()).toString(),
          token: yield crowdsaleInstance.token(),
          wallet: yield crowdsaleInstance.wallet(),
          weiRaised: web3.toBigNumber(yield crowdsaleInstance.weiRaised()).toString()
        }

        dispatch(gotCrowdsaleStats(crowdsaleStats))

      })
      .catch(err => {
        console.error(err)
      })
    }
  } else {
    console.error('Web3 is not initialized.')
  }
}
