import React from "react";

export const TodoHeader = (props) => (
  <div className="row">
    <div className="col-8">
      <h5>List of Todos</h5>
    </div>
    <div className="col-4">
      {props.children}
    </div>
  </div>
);
