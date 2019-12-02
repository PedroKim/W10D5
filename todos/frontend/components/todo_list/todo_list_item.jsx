import React from "react";
import TodoDetailView from "./todo_detail_view_container";

export default class ToDoListItem extends React.Component {
  constructor (props) {
    super(props);

    const { todo, removeTodo, updateTodo } = props;
    this.todo = todo;
    this.removeTodo = removeTodo;
    this.updateTodo = updateTodo;
    this.state = {
      detail: false
    };
  }

  toggleTodo(e) {
    this.todo.done = !this.todo.done;
    this.updateTodo(this.todo);
  }

  toggleDetails(e) {
    this.setState({ detail: !this.state.detail });
  }

  render () {
    const doneState = this.todo.done ? "Undo" : "Done";
    const todoDetails = this.state.detail ? <TodoDetailView todo={this.todo} /> : "";
    return (
      <li>
        <span onClick={this.toggleDetails.bind(this)}>{this.todo.title}</span> - 
        <button onClick={this.toggleTodo.bind(this)}>{doneState}</button>
        {todoDetails}
      </li>
    );
  }
}