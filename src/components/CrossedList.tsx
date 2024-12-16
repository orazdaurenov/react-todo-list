import React from "react";
import { type TodoObj } from "./List";
//the point of this component is to: change <li> into <del>
// <li> text </li> => <li> <del> text </del> </li>
// uls should render lis, not dels
// one way of having dynamic JSX is to have multiple returns
// each returns satifies one visual state
// this component has two visual states
//so it should this many returns: 2

type CrossedListProps = {
  todo: TodoObj;
};

const CrossedList = ({ todo }: CrossedListProps) => {
  if (todo.isDone) {
    return (
      <li>
        <del>{todo.todo}</del>
      </li>
    );
  }
  return <li>{todo.todo}</li>;
};

export default CrossedList;
