import React from "react";

export const TodoHeader = (props) => (
  <div className="row">
    <div className="col-md-8">
      <h5>List of Todos</h5>
    </div>
    <div className="col-md-4">
      {props.children}
    </div>
  </div>
);
