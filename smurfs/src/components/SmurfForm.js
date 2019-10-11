import React, { useState } from "react";
import { connect } from "react-redux";
import { Fact } from './Fact';

import { addPost } from "../actions";
import { Server } from "https";

const TodoForm = props => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  //console.log(props);

  
  return (

    <div>
      <input value={name} placeholder="name" onChange={e => setName(e.target.value)} />
      <input value={age} placeholder="age" onChange={e => setAge(e.target.value)} />
      <input value={height} placeholder="height" onChange={e => setHeight(e.target.value)} />
      <button onClick={e => props.addPost(name, age, height)} onClick={refresh}>Add</button>
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
)(TodoForm);
