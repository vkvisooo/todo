import React, { useContext, useState } from "react";

import TodoList from "./TodoLists";
import TodoForm from "./TodoForms";
import Store from "../context/context";
import Input from "./Input";
import empty from "../images/empty.jpg";
import Divider from "./Divider";

export default function Container() {
    console.log('render container');
    const { state, dispatch } = useContext(Store);
    const [todoTypeList, setTodoTypeList] = useState('')
    const [activeTodo, setActiveTodo] = useState(state.todoTypeList[0])
    const [errorMsg , setErrorMsg] = useState('');

    if (state.todoTypeList.length && !state.todoTypeList.includes(activeTodo)) setActiveTodo(state.todoTypeList[0])

    const handleTodoChange = (e) => {
        setTodoTypeList(e.target.value)
        if (e.target.value.length) setErrorMsg('');
    }
    const handleTodoTypeList = () => {
        if (state.todoTypeList && state.todoTypeList.includes(todoTypeList)) {
            setErrorMsg('Already Exist');
            return;
        }
        if (!todoTypeList.length) {
            setErrorMsg('Required Field');
            return;
        }
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
    return (
        <div className="col-12 pt-5 px-0 row ml-0 justify-content-between">
            <section className="col-12 col-md-4 px-0">
                <h4><span className="text-info">To</span>do <span className="text-info">Det</span>ails</h4>
                <Input {...props} />
                {errorMsg && errorMsg.length &&
                    <p className="text-danger pt-2 mb-0">{errorMsg}</p>
                }
                <br />
                {state.todoTypeList.length ? (<div className="row">
                    <div className="col-12">
                        <h6 className="mb-1">Todo Types</h6>
                        <ul className="list-group">
                            {state.todoTypeList.length > 0 && state.todoTypeList.map(t => (
                                <li key={t} className="list-group-item p-0" onClick={() => setActiveTodo(t)}>
                                    <div style={{ borderLeft: t === activeTodo ? '4px solid #17a2b8': 'none'}} className="py-2 px-3 ">{t}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                ) : <img src={empty} alt="list empty" />}
            </section>
            <section className="col-12 col-md-6 px-0">
                <Divider text="Todo List" className="mt-3 d-md-none" />
                <h4><span className="text-info">To</span>do <span className="text-info">Li</span>st</h4>
                <TodoForm activeTodo={activeTodo} />
                <TodoList activeTodo={activeTodo} />
            </section>
        </div>
    )
}