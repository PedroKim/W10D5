import React from "react";
import TodoListItem from "../todo_list/todo_list_item";
import TodoForm from "../todo_list/todo_form";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos, errors, removeTodo, receiveTodo, createTodo, updateTodo } = this.props;
    const todosLi = todos.map(todo => {
      return <TodoListItem
        key={todo.id}
        todo={todo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />;
    });

    const errorsLis = errors.map((error, idx) => {
      return <li key={idx}>{error}</li>
    });
    return (
      <div>
        <ul>{errorsLis}</ul>
        <ul>
          {todosLi}
        </ul>
        <TodoForm receiveTodo={receiveTodo} createTodo={createTodo}/>
      </div>
    );
  }
}