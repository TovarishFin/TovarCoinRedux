const initialState = {}

const crowdsaleReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GOT_CROWDSALE_STATS':
      console.log(action.payload)
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}

export default crowdsaleReducer
