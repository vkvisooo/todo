const initalValues = {
  todoTypelist: [],
  todoListData: {}
}

const addTodo = (state, payload) => {
  const newTodoList = { ...state.todoListData }
  newTodoList[payload.key] = newTodoList[payload.key] ? [...newTodoList[payload.key]] : [];
  newTodoList[payload.key].push(payload.todo);
  return newTodoList;
}

const deleteTodo = (state, {key, todo}) => {
  let newTodoList = { ...state.todoListData }
  const filterTodo = newTodoList[key].filter((t) => t !== todo);
  if (!filterTodo.length) {
    delete newTodoList[key];
    return { ...newTodoList };
  }
  return {...newTodoList, [key]: filterTodo };
}

const deteteTodoDetail = (state, {key}) => {
  const newTodoList = { ...state.todoListData };
  let newTodoTypelist = [ ...state.todoTypelist ];
  if (newTodoList[key].length === 1) {
    newTodoTypelist =  newTodoTypelist.filter(list => list !== key);
  }
  return newTodoTypelist;
}

const addTodoDetail = (state, payload) => {
  const newTodoTypelist = [ ...state.todoTypelist ] 
  newTodoTypelist.push(payload);
  return newTodoTypelist;
}

export default function reducer(state = initalValues, {payload, type}) {
  switch (type) {
    case "ADD_TODO":
      // return current state if empty
      if (!payload) {
        return state;
      }
      // return current state if duplicate
      if ( state.todoListData[payload.key] && state.todoListData[payload.key].includes(payload.todo)) {
        return state;
      }
      return {
        ...state,
        todoListData: addTodo(state, payload),  
      };
    case "COMPLETE":
      return {
        ...state,
        backup: { ...state.todoListData },
        todoListData: deleteTodo(state, payload),
        todoTypelist: deteteTodoDetail(state, payload)
      };
    
    case "TODO_TYPE_LIST":
      if (state.todoTypelist.includes(payload)) return state;
      return {
        ...state,
        todoTypelist: addTodoDetail(state, payload),
      }
      
    default:
      return state;
  }
}
