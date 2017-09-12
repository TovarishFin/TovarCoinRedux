import CrowdsaleContract from '../../build/contracts/TovarCoinCrowdsale.json'
import TovarCoinContract from '../../build/contracts/TovarCoin.json'
import contract from 'truffle-contract'
import co from 'co'

export function getCrowdsaleInstance(web3) {
  return new Promise(function(resolve, reject) {

    co(function* () {

      let crowdsale = contract(CrowdsaleContract)
      crowdsale.setProvider(web3.currentProvider)
      let crowdsaleInstance = yield crowdsale.deployed()
      resolve(crowdsaleInstance)
    })
    .catch(err=> {
      reject(err)
    })

  });

}

export function getTovarCoinInstance(web3, tovarCoinAddress) {
  return new Promise(function(resolve, reject) {

    let tovarCoin = web3.eth.contract(TovarCoinContract.abi)
    let tovarCoinInstance = tovarCoin.at(tovarCoinAddress)
    resolve(tovarCoinInstance)

  });
}
