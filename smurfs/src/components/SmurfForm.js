import React, { useState } from "react";
import { connect } from "react-redux";
import { Fact } from './Fact';

import { addPost } from "../actions";
import { deletePost } from '../actions';
import { Server } from "https";
import { className } from "postcss-selector-parser";

const SmurfForm = props => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [id, setId] = useState("")
  //console.log(props);

  
  return (
    <div className='forms'>
      <div className='addingSmurf'>
        <input value={name} placeholder="name" onChange={e => setName(e.target.value)} />
        <input value={age} placeholder="age" onChange={e => setAge(e.target.value)} />
        <input value={height} placeholder="height" onChange={e => setHeight(e.target.value)} />
        <button onClick={e => props.addPost(name, age, height)}>Add</button>
      </div>
      <div className='deletingSmurf'>
        <input value={id} placeholder="delete by id" onChange={e => setId(e.target.value)}/>
        <button onClick={e => props.deletePost(id)}>Delete</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
    return {
      smurfs: state,
      isFetching: state.isFetching,
      error: state.error
    };
  };

export default connect(
    mapStateToProps,
  { addPost }
)(SmurfForm);

