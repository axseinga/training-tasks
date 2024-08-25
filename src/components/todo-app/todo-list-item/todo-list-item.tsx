import { TodoItemT } from "@/types";
import TodoListItemStyles from "@/components/todo-app/todo-list-item/todo-list-item.module.scss";

type TodoListItemProps = {
  item: TodoItemT;
  removeItem: (id: string) => void;
  updateItem: (id: string) => void;
};

export const TodoListItem = ({
  item,
  removeItem,
  updateItem,
}: TodoListItemProps) => {
  return (
    <li className={`${TodoListItemStyles.todoListItem} ${item.isCompleted && TodoListItemStyles.completed}`}>
      <div>
        <input
          type="checkbox"
          id={`checkbox-input-${item.id}`}
          name={`checkbox-input-${item.id}`}
          checked={item.isCompleted}
          onChange={() => updateItem(item.id)}
          value="true"
          aria-checked={item.isCompleted}
        />
        <label htmlFor={`checkbox-input-${item.id}`}>{item.text}</label>
      </div>
      <button type="button" onClick={() => removeItem(item.id)}>
        Delete
      </button>
    </li>
  );
};
