import React, { useContext, useState } from "react";
import Store from "../context/context";
import Input from "./Input";

export default function TodoForm(props) {
  const { state, dispatch } = useContext(Store);

  // Creating a local state to have currently writing
  // todo item that will be sent to the global store.
  const [todo, setTodo] = useState("");
  

  console.log(props, 'props');
  function handleTodoChange(e) {
    setTodo(e.target.value);
    console.log(state, 'state');
  }

  function handleTodoAdd() {
    dispatch({ type: "ADD_TODO", payload: { todo, key: props.activeTodo } });
    setTodo("");
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
      {state.todoListData[props.activeTodo].includes(todo) && 
        <p className="text-danger pt-2 mb-0">Already exist</p>
      }
    </>
  );
}
