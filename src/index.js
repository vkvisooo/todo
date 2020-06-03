import React, { useReducer, useContext } from 'react';
import ReactDOM from 'react-dom';

import Store from './context/context';
import reducer from './reducer/reducer';

import { usePersistedContext, usePersistedReducer } from './usePersists';

import Container from './components/Container';


function App() { 
  // create a global store to store the states
  const context = useContext(Store);
  console.log(context, 'main context');
  const globalStore = usePersistedContext(context, 'state');

  // `todos` will be a state manager to manage states. 
  const [state, dispatch] = usePersistedReducer(useReducer(reducer, globalStore),'state');
  return ( 
    // Store.Provider passes the state and dispatcher to the down.
    <Store.Provider value={{ state, dispatch }}> 
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-12">
          <h3 className="pt-3 text-center">H2 Project 2019</h3>
          <Container />
        </div>
      </div>
    </Store.Provider> // store provider ended here
  ); 
} 
 
const rootElement = document.getElementById("root"); 
ReactDOM.render(<App />, rootElement); 
 