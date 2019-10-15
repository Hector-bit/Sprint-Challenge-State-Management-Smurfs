import axios from 'axios';
import { Server } from 'https';

export const addItem = (name, age, height) => {
  console.log(name, age, height);
  return {
    type: ADD_SMURF,
    payload: (name),
  };
};

// action types
export const ADD_SMURF = 'ADD_SMURF';
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADDING_POST_SUCCESS = "ADDING_POST_SUCCESS";
export const ADDING_POST_FAILED = "ADDING_POST_FAILED";

const POST_API = "http://localhost:3333/smurfs";

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

 export const addPost = (name, age, height) => async dispatch => {

  console.log(name, age, height)
	const res = await axios.post(POST_API, {
    name: name,
    age: age,
    height: height,
   })

   console.log(res)
   dispatch({
     type: ADD_SMURF,
     payload: res.data
   })
}

 export const deletePost = (id) => {

 }
