const help = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_HELP':
      return action.payload
    default:
      return state
  }
}
export default help
