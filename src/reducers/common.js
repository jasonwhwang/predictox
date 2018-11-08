const defaultState = {
  requests: null,
  headerTab: 0
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LOAD_REQUESTS':
      return {
        ...state,
        requests: action.error ? null : action.requests.results
      }
    case 'LOGOUT':
      return {
        ...state,
        requests: null
      }
    case 'HEADER_TAB':
      return {
        ...state,
        headerTab: action.headerTab
      }
    default:
      return state;
  }
}