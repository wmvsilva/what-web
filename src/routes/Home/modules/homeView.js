// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_RESPONSE_SUCCESS = 'FETCH_RESPONSE_SUCCESS'
export const FETCH_RESPONSE_ERROR = 'FETCH_RESPONSE_ERROR'


class SearchClient {

  searchText(text) {
    console.log("called");
    return new Promise((resolve, reject) => {
      resolve(text)
    })
  }
}

var searchClient = new SearchClient();

/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk! */

export const searchText = (text) => {
  return (dispatch, getState) => {
    return searchClient.searchText(text).then((response) => {
      console.log("got a response");
      console.log(response);
      dispatch({ type: FETCH_RESPONSE_SUCCESS, payload: { response } })
    }).catch((err) => {
      dispatch({ type: FETCH_RESPONSE_ERROR, payload: err })
    })
  }
}

export const actions = {
  searchText
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_RESPONSE_SUCCESS]    : (state, action) => {
    return {result: action.payload};
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function homeViewReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  if (handler) {
    return handler(state, action);
  } else {
    return state;
  }
}
