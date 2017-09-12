import store from '../../../../store'
import co from 'co';
import * as contractUtil from '../../../../util/contractUtil'
import toPromise from '../../../../util/toPromise'

export const CROWDSALE_FUNDED = 'CROWDSALE_FUNDED'
function crowdsaleFunded(res) {
  return {
    type: CROWDSALE_FUNDED,
    payload: res
  }
}

export function fundCrowdsale(beneficiary, amount) {
  let web3 = store.getState().web3.web3Instance

  if (typeof web3 !== 'undefined') {

    return function(dispatch) {

      co(function* () {
        let coinbase = yield toPromise(web3.eth.getCoinbase)

        let crowdsaleInstance = yield contractUtil.getCrowdsaleInstance(web3)

        let result = yield crowdsaleInstance.buyTokens(beneficiary, {from: coinbase, value: web3.toWei(parseFloat(amount), 'ether')})

        dispatch(crowdsaleFunded(result))

      })
      .catch(err => {
        console.log(err)
      })

    }
  } else {
    console.error('Web3 is not initialized.');
  }
}
