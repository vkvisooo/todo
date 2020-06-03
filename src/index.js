import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";

import Store from "./context/context";
import reducer from "./reducer";

import { usePersistedContext, usePersistedReducer } from "./usePersist";

import Container from "./components/Container";


function App() {
  // create a global store to store the state
  const context = useContext(Store);
  console.log(context, 'main context');
  const globalStore = usePersistedContext(context, "state");

  // `todos` will be a state manager to manage state. 
  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state" // The localStorage key
  );
  console.log(state, 'main stateeee');
  return (
    // Store.Provider passes the state and dispatcher to the down
    <Store.Provider value={{ state, dispatch }}>
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-12">
          <h3 className="pt-3 text-center">H2 Project 2019</h3>
          <Container />
        </div>
      </div>
    </Store.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
