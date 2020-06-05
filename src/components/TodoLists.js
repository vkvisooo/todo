import React, { useContext } from "react";
import Store from "../context/context";
import TodoHeader from "./TodoHeaders";
import empty from "../images/empty.jpg"

export default function TodoList({ activeTodo }) {
  const { state, dispatch } = useContext(Store);
  const todoList = state.todoListData[activeTodo] || [];

  const pluralize = count =>
    count > 1 ? ` ${count} Todos` : `${count} Todo`;

  let header =
    todoList.length === 0 ? (
      <div className="d-flex justify-content-center pt-1">
        <img className="m-auto" src={empty} alt="empty screen" />
      </div>
    ) : (
        <TodoHeader>
          <span className="float-right">{pluralize(todoList.length)}</span>
        </TodoHeader>
      );
  console.log('list render')
  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-12">
            <br />
            {header}
          </div>
        </div>
        {todoList && todoList.length > 0 && (<div className="row">
          <div className="col-12">
            <ul className="list-group">
              {todoList.map(todo => (
                <li key={todo} className="list-group-item py-2">
                  {todo}
                  <button
                    className="float-right btn btn-success btn-sm"
                    style={{ marginLeft: 10 }}
                    onClick={() => dispatch({ type: "COMPLETE", payload: { key: activeTodo, todo } })}
                  >Mark Done</button>
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
