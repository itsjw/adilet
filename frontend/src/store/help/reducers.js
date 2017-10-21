const help = (state = [], action, payload) => {
    switch (action.type) {
        case "RECEIVE_HELP":
            return state.concat(action.payload.help)
        
        default:
            return state
    }
}
export default help
