import React from 'react';

const Fact = props => {
  console.log(props.fact)
  return (
    <div className='smurf-card'>
      <h2>{props.fact.name}</h2>
      <p>Age: {props.fact.age}</p>
      <p>Height: {props.fact.height}</p>
    </div>
  );
};

export default Fact;
