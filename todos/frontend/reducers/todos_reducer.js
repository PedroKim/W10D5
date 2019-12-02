import {merge} from "lodash";
import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO} from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_TODOS:
      // debugger;
      const { todos } = action, nextTodos = {};

      todos.forEach((todo) => {
        nextTodos[todo.id] = todo;
      });

      // let newState = merge({}, state, nextTodos);
      const result = Object.assign({}, state, nextTodos);
      return result;
    case RECEIVE_TODO:
      const { todo } = action, nextTodo = { [todo.id]: todo };
      newState = merge({}, state, nextTodo);

      return newState;

    case REMOVE_TODO:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default: 
      return state;
  }
};


export default todosReducer; 