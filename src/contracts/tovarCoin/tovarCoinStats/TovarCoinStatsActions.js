import store from '../../../store'
import co from 'co'
import * as contractUtil from '../../../util/contractUtil'
import toPromise from '../../../util/toPromise'

export const GOT_TOVARCOIN_STATS = 'GOT_TOVARCOIN_STATS'
function gotTovarCoinStats(tovarCoinStats) {
  return {
    type: GOT_TOVARCOIN_STATS,
    payload: tovarCoinStats
  }
}

export function getStats() {
  let web3 = store.getState().web3.web3Instance
  if(typeof web3 !== 'undefined') {
    return function(dispatch) {
      co(function* () {
        let crowdsaleInstance = yield contractUtil.getCrowdsaleInstance(web3)

        let tovarCoinAddress = yield crowdsaleInstance.token()

        let tovarCoinInstance = yield contractUtil.getTovarCoinInstance(web3, tovarCoinAddress)

        console.log(tovarCoinInstance)

        let tovarCoinStats = {
          address: tovarCoinInstance.address,
          name: yield toPromise(tovarCoinInstance.name),
          owner: yield toPromise(tovarCoinInstance.owner),
          symbol: yield toPromise(tovarCoinInstance.symbol),
          totalSupply: new web3.toBigNumber(yield toPromise(tovarCoinInstance.totalSupply)).toString(),
          decimals: new web3.toBigNumber(yield toPromise(tovarCoinInstance.decimals)).toString(),
          mintingFinished: yield toPromise(tovarCoinInstance.mintingFinished),
        }

        dispatch(gotTovarCoinStats(tovarCoinStats))

      })
      .catch(err => {
        console.error(err)
      })
    }
  } else {
    console.error('Web3 is not initialized.')
  }
}
