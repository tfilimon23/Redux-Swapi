import { FETCHING, SUCCESS, FAILURE } from  "../actions";
const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  fetching: false,
  error: null
};
export const  charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
    return {
      ...state,
      fetching: true,
      error:null
    }
    case SUCCESS:
    return {
      ...state,
      fetching: false,
      characters: action.payload
    }
    case FAILURE:
    return {
      ...state,
      fetching: false,
      error: action.payload
    }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
