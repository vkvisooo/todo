import React from "react";

// Store Context is the global context that is managed by reducers.

const Store = React.createContext({
  todoListData: {
    Meetings: [
      "Meeting 1",
      "Meeting 2",
      "Meeting 3",
      "Meeting 4"
    ],
    Project_Queries: [
      "Query 1",
      "Query 2",
      "Query 3",
      "Query 4"
    ],
  },
  todoTypelist: ['Meetings', 'Project Queries']
});

export default Store;
