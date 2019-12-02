export const allTodos = ({todos}) => {
  return Object.keys(todos).map( id => {
    return todos[id];
  });
};

export const stepsByTodoId = ({steps}, todoId) => {
  const todoSteps = [];
  for (let i = 0; i < steps.length; i++) {
    if (steps[i].todo_id === todoId) {
      todoSteps.push(steps[i]);
    }
  }
  return todoSteps;
};
