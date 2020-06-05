import React from "react";

const TodoHeader = (props) => {
  console.log('render Todo Header')
return (
  <div className="row">
    <div className="col-8">
      <h5>List of Todos</h5>
    </div>
    <div className="col-4">
      {props.children}
    </div>
  </div>
)}

export default React.memo(TodoHeader)
