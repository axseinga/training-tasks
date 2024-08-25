import React from "react";
import TodoFormStyles from "@/components/todo-app/todo-form/todo-form.module.scss";

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
    <form
      onSubmit={(e) => addItem(e)}
      className={TodoFormStyles.todoFormWrapper}
    >
      <div>
        <label htmlFor="todo-add-input">Add new to do</label>
        <input
          type="text"
          id="todo-add-input"
          name="todo-add-input"
          value={todoInput}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};
