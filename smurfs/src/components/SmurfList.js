import React from "react";
import { connect } from "react-redux";

import TodoItem from "./SmurfItem";

const TodoList = props => {
  return (
    <div>
      {props.smurfs &&
        props.smurfs.map(todo => <TodoItem key={todo.id} {...todo} />)}
    </div>
  );
};

const mapStateToProps = ({ todos }) => {
  console.log(todos);
  return { todos };
};
export default connect(
  mapStateToProps,
  null
)(TodoList);
