import { useState } from "react";
const TodoForm = ({ onSubmit }) => {
  const [inputTitle, setInputTitle] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setInputTitle(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    if (inputTitle.length === 0) return;
    onSubmit(inputTitle);
    setInputTitle("");
  };

  return (
    <form onSubmit={handleAdd}>
      <input type="text" value={inputTitle} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
