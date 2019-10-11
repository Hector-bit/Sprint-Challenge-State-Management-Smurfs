import React from 'react';

const Fact = props => {
  console.log(props.fact)
  return (
    <div className='smurf-card'>
      <h2>{props.fact.name}</h2>
      <p>{props.fact.age}</p>
      <p>{props.fact.height}</p>
    </div>
  );
};

export default Fact;
