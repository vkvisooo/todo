import React from "react";

const TodoHeader = (props) => {
  console.log('render Todo Header')
  const activeTodoClass = props.listType === 'todoList' ? 'text-info ' : '';
  const activeCompletedClass = props.listType === 'completedList' ? 'text-info ' : '';

return (
  <div className="row pb-1">
    <div className="col-8">
      <button className={`btn p-0 ${activeTodoClass}`} onClick={() => props.listHandler()}>Todo List</button> /&nbsp;
      <button className={`btn p-0 ${activeCompletedClass}`} onClick={() => props.listHandler('completed')}>Completed List</button>
    </div>
    <div className="col-4">
      {props.children}
    </div>
  </div>
)}

export default React.memo(TodoHeader)
