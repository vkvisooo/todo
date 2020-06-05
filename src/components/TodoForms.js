import React, { useContext, useState } from "react";
import Store from "../context/context";
import Input from "./Input";

const TodoForm = (props) => {
  const { state, dispatch } = useContext(Store);

  // Creating a local state to have currently writing
  // todo item that will be sent to the global store.
  const [todo, setTodo] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  

  console.log(props, 'props');
  function handleTodoChange(e) {
    setTodo(e.target.value);
    if(e.target.value.length) setErrorMsg('');
  }

  function handleTodoAdd() {
    const todoListData =  state.todoListData[props.activeTodo];
    if (!state.todoTypeList.length) {
      setErrorMsg('Need to Add Detail first');
      return;

    } else if(!todo.length) {
      setErrorMsg('Required Field');
      return true;

    } else if (todoListData && todoListData.includes(todo)) {
      setErrorMsg('Already Exist');

    }
    dispatch({ type: "ADD_TODO", payload: { todo, key: props.activeTodo } });
    setTodo("");
    setErrorMsg("");
  }

  function handleSubmitForm(event) {
    if (event.keyCode === 13) handleTodoAdd();
  }
  const inputProps = {
    value: todo,
    autofocus: true,
    placeholder: 'Enter Todo',
    handleSubmitForm,
    handleChange: handleTodoChange,
    handleClick: handleTodoAdd,
  }
  console.log('Form render')
  return (
    <>
      <Input {...inputProps}/>
      {errorMsg && 
        <p className="text-danger pt-2 mb-0">{errorMsg}</p>
      }
    </>
  );
}
export default React.memo(TodoForm);
