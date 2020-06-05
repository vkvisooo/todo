const initialValues = {
  todoTypeList: [],
  todoListData: {},
  todoCompleted: {}
}

const addTodo = (state, payload) => {
  const newTodoList = { ...state.todoListData }
  if (payload.todo) {
    newTodoList[payload.key] = newTodoList[payload.key] ? [...newTodoList[payload.key]] : [];
    newTodoList[payload.key].push(payload.todo);
  }
  return newTodoList;
}

const deleteTodo = (state, { key, todo }) => {
  let newTodoList = { ...state.todoListData }
  const filterTodo = newTodoList[key].filter((t) => t !== todo);
  if (!filterTodo.length) {
    delete newTodoList[key];
    return { ...newTodoList };
  }
  return { ...newTodoList, [key]: filterTodo };
}

const completedTodo = (state, payload) => {
  const newTodoCompleted = {...state.todoCompleted};
  if (payload.todo) {
    newTodoCompleted[payload.key] = newTodoCompleted[payload.key] ? [...newTodoCompleted[payload.key]] : [];
    newTodoCompleted[payload.key].push(payload.todo);
  }
  return newTodoCompleted;
}

const deleteTypeList = (state, typeList) => {
  let todoTypeList = [...state.todoTypeList];
  const todoListData = { ...state.todoListData };
  const todoCompleted = {...state.todoCompleted}
  delete todoListData[typeList];
  delete todoCompleted[typeList];
  todoTypeList = todoTypeList.filter(list => list !== typeList);
  return { todoTypeList, todoListData, todoCompleted };
}

const addTodoDetail = (state, payload) => {
  const newTodoTypeList = [...state.todoTypeList]
  if (payload) newTodoTypeList.push(payload);
  return newTodoTypeList;
}

export default function reducer(state = initialValues, { payload, type }) {
  switch (type) {
    case "ADD_TODO":
      // return current state if empty
      if (!payload) {
        return state;
      }
      // return current state if duplicate
      if (state.todoListData[payload.key] && state.todoListData[payload.key].includes(payload.todo)) {
        return state;
      }
      return {
        ...state,
        todoListData: addTodo(state, payload),
      };
    case "COMPLETE":
      return {
        ...state,
        todoCompleted: completedTodo(state, payload),
        todoListData: deleteTodo(state, payload),
      };

    case "TODO_TYPE_LIST":
      if (state.todoTypeList.includes(payload)) return state;
      return {
        ...state,
        todoTypeList: addTodoDetail(state, payload),
      }

    case "DELETE_TYPE_LIST":
      return {
        ...state,
        ...deleteTypeList(state, payload),
      }

    default:
      return state;
  }
}
