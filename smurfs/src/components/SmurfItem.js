import React from "react";

const TodoItem = props => {
    console.log(props)
  return <div>{props.name}</div>;
};

export default TodoItem;
