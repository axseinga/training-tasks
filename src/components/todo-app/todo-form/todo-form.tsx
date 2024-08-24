import React from "react";

type TodoFormProps = {
  addItem: (e: React.SyntheticEvent<HTMLFormElement>) => void;
  todoInput: string;
  handleChange: (inputText: string) => void;
};

export const TodoForm = ({
  addItem,
  todoInput,
  handleChange,
}: TodoFormProps) => {
  return (
    <form onSubmit={(e) => addItem(e)}>
      <label htmlFor="todo-add-input">Add new to do</label>
      <input
        type="text"
        id="todo-add-input"
        name="todo-add-input"
        value={todoInput}
        onChange={(e) => handleChange(e.target.value)}
      />
    </form>
  );
};
