import React, { useContext } from "react";
import Store from "../context/context";
import { TodoHeader } from "./TodoHeaders";

export default function TodoList(props) {
  const activeTodo = props.activeTodo.split(' ').join('_');
  const { state, dispatch } = useContext(Store);
  const todoList = state.todoListData[activeTodo] || [];

  const pluralize = count =>
    count > 1 ? ` ${count} Todos` : `${count} Todo`;

  let header =
    todoList.length === 0 ? (
      <h4>Nothing to show, create todos</h4>
    ) : (
        <TodoHeader>
          <span className="float-right">{pluralize(todoList.length)}</span>
        </TodoHeader>
      );
  console.log('list render')
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <br />
            {header}
          </div>
        </div>
        {todoList && todoList.length > 0 && (<div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {todoList.map(todo => (
                <li key={todo} className="list-group-item">
                  {todo}
                  <button
                    className="float-right btn btn-success btn-sm"
                    style={{ marginLeft: 10 }}
                    onClick={() => dispatch({ type: "COMPLETE", payload: { key: activeTodo, todo } })}
                  >
                    Mark Done
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}
