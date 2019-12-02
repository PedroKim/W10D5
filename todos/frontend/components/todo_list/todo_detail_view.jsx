import React from "react";


const TodoDetailView = ({ todo, removeTodo }) => {

  function remove(e) {
    removeTodo(todo);
  }

  return ( 
    <div>
      {todo.body}
      <br />
      <button onClick={remove} > Remove</button >
    </div>
  );
};

export default TodoDetailView;