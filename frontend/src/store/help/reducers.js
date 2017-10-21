const help = (state = [], { type, payload }) => {
  switch (type) {
    case 'RECEIVE_HELP_ARTICLE':
      return {
        ...state,
        article: payload,
      }
    case 'RECEIVE_HELP':
      return {
        ...state,
        article: payload,
      }
    case 'FETCH_HELP_ARTICLE':
      return {
        ...state,
        article: payload,
      }
    case 'GET_SEARCH_RESULT':
      return {
        ...state,
        searchValue: payload,
      }
    default:
      return state
  }
}

export default help
