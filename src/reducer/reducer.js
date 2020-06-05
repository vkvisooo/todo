const initialValues = {
  todoTypeList: [],
  todoListData: {}
}

const addTodo = (state, payload) => {
  const newTodoList = { ...state.todoListData }
  if (payload.todo) {
    newTodoList[payload.key] = newTodoList[payload.key] ? [...newTodoList[payload.key]] : [];
    newTodoList[payload.key].push(payload.todo);
  }
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

const deleteTodoDetail = (state, {key}) => {
  const newTodoList = { ...state.todoListData };
  let newTodoTypeList = [ ...state.todoTypeList ];
  if (newTodoList[key].length === 1) {
    newTodoTypeList =  newTodoTypeList.filter(list => list !== key);
  }
  return newTodoTypeList;
}

const addTodoDetail = (state, payload) => {
  const newTodoTypeList = [ ...state.todoTypeList ] 
  if (payload) newTodoTypeList.push(payload);
  return newTodoTypeList;
}

export default function reducer(state = initialValues, {payload, type}) {
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
        todoListData: deleteTodo(state, payload),
        todoTypeList: deleteTodoDetail(state, payload)
      };
    
    case "TODO_TYPE_LIST":
      if (state.todoTypeList.includes(payload)) return state;
      return {
        ...state,
        todoTypeList: addTodoDetail(state, payload),
      }
      
    default:
      return state;
  }
}
