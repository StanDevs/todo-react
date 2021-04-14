const Todo = ({ todo, changeStatus }) => {
  if (!todo.isCompleted) {
    return <li onClick={() => changeStatus(todo.id)}>{todo.title}</li>;
  }
  return (
    <li className="Completed" onClick={() => changeStatus(todo.id)}>
      {todo.title}
    </li>
  );
};

export default Todo;
