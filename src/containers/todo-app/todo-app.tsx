import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoList } from "@/components/todo-app/todo-list/todo-list";
import { TodoForm } from "@/components/todo-app/todo-form/todo-form";
import { TodoItemT } from "@/types";
import TodoAppStyles from "@/containers/todo-app/todo-app.module.scss";

export const TodoApp = () => {
  const [todoInput, setTodoInput] = React.useState("");
  const [todoItems, setTodoItems] = React.useState<TodoItemT[] | []>(
    JSON.parse(localStorage.getItem("todoList") || "[]")
  );

  React.useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoItems));
  }, [todoItems]);

  const handleChange = (text: string) => {
    setTodoInput(text);
  };

  const createNewTodoItem = (text: string): TodoItemT => ({
    id: uuidv4(),
    text,
    isCompleted: false,
  });

  const addItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoInput.trim() === "") return;
    const newTodoItem = createNewTodoItem(todoInput);
    setTodoItems([...todoItems, newTodoItem]);
    setTodoInput("");
  };

  const removeItem = (id: string) => {
    const updatedTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(updatedTodoItems);
  };

  const updateItem = (id: string) => {
    const currentTodo = todoItems.find((item) => item.id === id);

    if (!currentTodo) {
      throw new Error("This todo item does not exists.");
    }

    const updatedTodoItems = todoItems.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodoItems(updatedTodoItems);
  };

  return (
    <div className={TodoAppStyles.pageWrapper}>
      <h1>Todo app</h1>
      <div className={TodoAppStyles.appWrapper}>
        <TodoForm
          addItem={addItem}
          handleChange={handleChange}
          todoInput={todoInput}
        />
        <TodoList
          items={todoItems}
          removeItem={removeItem}
          updateItem={updateItem}
        />
      </div>
    </div>
  );
};
