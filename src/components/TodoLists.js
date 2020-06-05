import React, { useContext, useState } from "react";
import Store from "../context/context";
import TodoHeader from "./TodoHeaders";
import empty from "../images/empty.jpg"
import completeIcon from "../images/tick1.svg"

const TodoList = ({ activeTodo }) => {
  const { state, dispatch } = useContext(Store);
  const [listType, setListType] = useState('todoList')
  const todoList = state.todoListData[activeTodo] || [];
  const todoCompleted = state.todoCompleted[activeTodo] || [];
  const flag = todoList.length || todoCompleted.length;
  const renderTodoList = listType === 'todoList' ? todoList : todoCompleted;
  const listHandler = (type) => {
    if (type === 'completed') {
      setListType('completedList')
    } else {
      setListType('todoList')
    }
  }
  const countDetail = listType.split('List').join(' ');
  let header =
    flag === 0 ?
      <div className="d-flex justify-content-center pt-1">
        <img className="m-auto" src={empty} alt="empty screen" />
      </div>
      : <TodoHeader
        listHandler={listHandler}
        listType={listType}
      >
        <span className="float-right text-capitalize">{`${renderTodoList.length} ${countDetail} List`}</span>
      </TodoHeader>;
  console.log('list render')
  return (
    <div className="row">
      <div className="col-12">
        <br />
        {header}
        {renderTodoList && renderTodoList.length > 0 && (<div className="row">
          <div className="col-12">
            <ul className="list-group">
              {renderTodoList.map(todo => (
                <li key={todo} className="list-group-item py-2">
                  {todo}
                  {listType === 'todoList' && (
                    <button
                      className="float-right btn btn-info btn-sm"
                      style={{ marginLeft: 10 }}
                      onClick={() => dispatch({ type: "COMPLETE", payload: { key: activeTodo, todo } })}
                    >
                      Mark Done
                    </button>
                  )}
                  {listType === 'completedList' && (
                    <img className="float-right" width="25" src={completeIcon} alt="completed"/>
                  )}
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
export default React.memo(TodoList);
