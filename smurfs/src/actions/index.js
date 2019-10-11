import axios from 'axios';
import { Server } from 'https';

// export const types = {
//   ADD_ITEM: "ADD_ITEM",
//   DELETE_ITEM: "DELETE_ITEM"
// };

export const addItem = (name, age, height) => {
  console.log(name, age, height);
  return {
    type: ADD_ITEM,
    payload: (name),
  };
};

// action types
export const ADD_ITEM = 'ADD_ITEM';
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchFacts = () => dispatch => {

  dispatch({ type: START_FETCHING });

  axios
    .get(
      'http://localhost:3333/smurfs'
    )
    .then(res => (
      console.log(res.data),
      dispatch({ type: FETCH_SUCCESS, payload: res.data })))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};
