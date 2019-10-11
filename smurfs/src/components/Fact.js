import React from 'react';

const Fact = props => {
  console.log(props.fact)
  return (
    <h2>{props.fact.name}</h2>
  );
};

export default Fact;
