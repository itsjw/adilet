const help = (state = [], action, payload) => {
    switch (action.type) {
        case 'RECEIVE_HELP_ARTICLE':
            return [
                ...state, {
                    article: action.payload.article
                }
            ]
        default:
            return state
    }
}

export default help