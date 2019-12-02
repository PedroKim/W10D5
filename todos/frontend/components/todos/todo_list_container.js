import {connect} from "react-redux";
import TodoList from "./todo_list";
import {allTodos} from "../../reducers/selectors"; 
import {receiveTodo, deleteTodo, fetchTodos, createTodo, updateTodo} from "../../actions/todo_actions";


const mapStateToProps = (state) => {
  // debugger;
  return {
    todos: allTodos(state),
    errors: state.errors
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    removeTodo: (todo) => dispatch(deleteTodo(todo)),
    fetchTodos: () => dispatch(fetchTodos()),
    createTodo: (todo) => dispatch(createTodo(todo)),
    updateTodo: (todo) => dispatch(updateTodo(todo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);