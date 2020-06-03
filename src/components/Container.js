import React, { useContext, useState, useReducer } from "react";

import TodoList from "./TodoLists";
import TodoForm from "./TodoForms";
import Store from "../context/context";
import Input from "./Input";
import empty from "../images/empty.jpg"

export default function Container() {
    const { state, dispatch } = useContext(Store);
    const [todoTypeList, setTodoTypeList] = useState('')
    const [activeTodo, setActiveTodo] = useState(state.todoTypelist[0])

    if (state.todoTypeList && !state.todoTypeList.includes(activeTodo)) setActiveTodo(state.todoTypelist[0])

    const handleTodoChange = (e) => {
        setTodoTypeList(e.target.value)
    }
    const handleTodoTypeList = () => {
        dispatch({ type: 'TODO_TYPE_LIST', payload: todoTypeList })
        setTodoTypeList('');
    }
    function handleSubmitForm(event) {
        if (event.keyCode === 13) handleTodoTypeList();
    }

    const props = {
        value: todoTypeList,
        autoFocus: true,
        placeholder: 'Todo Details',
        handleChange: handleTodoChange,
        handleClick: handleTodoTypeList,
        handleSubmitForm
    }
    console.log('container render')
    return (
        <div className="col-12 pt-4 row justify-content-between">
            <section className="col-4">
                <Input {...props} />
                {state.todoTypelist && state.todoTypelist.includes(todoTypeList) &&
                    <p className="text-danger pt-2 mb-0">Already exist</p>
                }
                <br />
                {state.todoTypelist.length ? (<div className="row">
                    <div className="col-md-12">
                        <h6 className="mb-1">Todo Types</h6>
                        <ul className="list-group">
                            {state.todoTypelist.length > 0 && state.todoTypelist.map(t => (
                                <li key={t} className="list-group-item" onClick={() => setActiveTodo(t)}>
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                ) : <img src={empty} alt="list empty" />}
            </section>
            <section className="col-7">
                <TodoForm activeTodo={activeTodo} />
                <TodoList activeTodo={activeTodo} />
            </section>
        </div>
    )
}