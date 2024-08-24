import React from "react";
import { TodoItemT } from "@/types";
import { TodoListItem } from "../todo-list-item/todo-list-item";

type TodoListProps = {
  items: TodoItemT[];
  removeItem: (id: string) => void;
  updateItem: (id: string) => void;
};

enum CategoriesEnum {
  ALL = "all",
  COMPLETED = "completed",
}

export const TodoList = ({ items, removeItem, updateItem }: TodoListProps) => {
  const [category, setCategory] = React.useState<CategoriesEnum>(
    CategoriesEnum.ALL
  );

  const filteredTodoList = React.useMemo(() => {
    if (category === CategoriesEnum.COMPLETED) {
      return items.filter((item) => item.isCompleted !== false);
    }
    return items;
  }, [category, items]);

  return (
    <div>
      <button onClick={() => setCategory(CategoriesEnum.ALL)}>Show all</button>
      <button onClick={() => setCategory(CategoriesEnum.COMPLETED)}>
        Show completed
      </button>
      {filteredTodoList.length > 0 ? (
        <ul>
          {filteredTodoList.map((item, index) => (
            <TodoListItem
              key={`${index}_${item.id}`}
              item={item}
              removeItem={removeItem}
              updateItem={updateItem}
            />
          ))}
        </ul>
      ) : (
        <p>No items to display</p>
      )}
    </div>
  );
};
