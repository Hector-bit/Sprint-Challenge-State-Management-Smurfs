import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, ADD_SMURF, ADDING_POST_SUCCESS } from '../actions';

const initialState = {
  smurfs: [],
  isFetching: false,
  error: ''
};



const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        smurfs: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};

export default rootReducer;


