const initialState = {}

const tovarCoinReducer = (state = initialState, action) => {
  switch(action.type) {

    case 'GOT_TOVARCOIN_STATS':
      let tovarCoinStats = { ...action.payload }
      return Object.assign({}, state, tovarCoinStats)

    case 'CROWDSALE_FUNDED':
      console.log(action.payload)
      return state

    case 'SPENDING_APPROVED':
      console.log(action.payload)
      return state

    case 'GOT_ALLOWANCE_INFO':
      console.log(action.payload)
      return state

    case 'TOVARCOIN_FUNCTION_SELECTED':
      console.log(action.payload)
      return Object.assign({}, state, {
        selectedTovarCoinFunction: action.payload
      })

    default:
      return state;
  }
}

export default tovarCoinReducer
