export function selectContractFunction(e, i, v) {
  return function(dispatch) {
    dispatch({
      type: 'TOVARCOIN_FUNCTION_SELECTED',
      payload: v
    })
  }
}
