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
  debugger;
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

export default function reducer(state = initalValues, action) {
  switch (action.type) {
    case "ADD_TODO":
      // return current state if empty
      if (!action.payload) {
        return state;
      }
      // return current state if duplicate
      if (state.todoListData[action.payload.key].includes(action.payload.todo)) {
        return state;
      }
      return {
        ...state,
        todoListData: addTodo(state, action.payload),  
      };
    case "COMPLETE":
      return {
        ...state,
        backup: { ...state.todoListData },
        todoListData: deleteTodo(state, action.payload),
        todoTypelist: deteteTodoDetail(state, action.payload)
      };
    
    case "TODO_TYPE_LIST":
      if (state.todoTypelist.includes(action.payload)) return state;
      return {
        ...state,
        todoTypelist: addTodoDetail(state, action.payload),
      }
      
    default:
      return state;
  }
}
