import store from '../../../../store'
import co from 'co'
import * as contractUtil from '../../../../util/contractUtil'
import toPromise from '../../../../util/toPromise'

export const SPENDING_APPROVED = 'SPENDING_APPROVED'
function spendingApproved(approvalRes) {
  return {
    type: SPENDING_APPROVED,
    payload: approvalRes
  }
}

export function approveSpending(spender, amount) {
  let web3 = store.getState().web3.web3Instance
  if(typeof web3 !== 'undefined') {
    return function(dispatch) {
      co(function* () {
        let coinbase = yield toPromise(web3.eth.getCoinbase)

        let crowdsaleInstance = yield contractUtil.getCrowdsaleInstance(web3)

        let tovarCoinAddress = yield crowdsaleInstance.token()

        let tovarCoinInstance = yield contractUtil.getTovarCoinInstance(web3, tovarCoinAddress)

        tovarCoinInstance.approve(spender, web3.toWei(amount), {from: coinbase}, (err, res) => {
          dispatch(spendingApproved(res))
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
