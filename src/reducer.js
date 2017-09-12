import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import web3Reducer from './util/web3/web3Reducer'
import crowdsaleReducer from './contracts/crowdsale/crowdsaleReducer';
import tovarCoinReducer from './contracts/tovarCoin/tovarCoinReducer';

const reducer = combineReducers({
  routing: routerReducer,
  web3: web3Reducer,
  crowdsale: crowdsaleReducer,
  tovarCoin: tovarCoinReducer
})

export default reducer
