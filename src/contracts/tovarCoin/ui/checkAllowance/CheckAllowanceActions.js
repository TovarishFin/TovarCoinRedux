import store from '../../../../store'
import co from 'co'
import * as contractUtil from '../../../../util/contractUtil'

export const GOT_ALLOWANCE_INFO = 'GOT_ALLOWANCE_INFO'
function spendingApproved(checkAllowanceRes) {
  return {
    type: GOT_ALLOWANCE_INFO,
    payload: checkAllowanceRes
  }
}

export function getAllowance(owner, spender) {
  let web3 = store.getState().web3.web3Instance
  if(typeof web3 !== 'undefined') {
    return function(dispatch) {
      co(function* () {

        let crowdsaleInstance = yield contractUtil.getCrowdsaleInstance(web3)

        let tovarCoinAddress = yield crowdsaleInstance.token()

        let tovarCoinInstance = yield contractUtil.getTovarCoinInstance(web3, tovarCoinAddress)

        tovarCoinInstance.allowance(owner, spender, (err, res) => {
          let allowance = new web3.toBigNumber(res).toString();
          dispatch(spendingApproved(allowance))
        })


      })
      .catch(err => {
        console.error(err)
      })
    }
  } else {
    console.error('Web3 is not initialized.')
  }
}
