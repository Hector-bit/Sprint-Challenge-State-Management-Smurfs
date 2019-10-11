import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchFacts } from '../actions';

import Fact from './Fact';

const SmurfInfo = props => {
  useEffect(() => {
    props.fetchFacts();
  }, []);

  if (props.isFetching) {
    return <h2>Loading Smurfs...</h2>;
  }

  // console.log(props)

  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.smurfs.map(fact => (
        
        <Fact key={fact._id} fact={fact} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchFacts }
)(SmurfInfo);
