import { InputElementT } from "@/types";

type FormCreatorListElementProps = {
  item: InputElementT;
  deleteInput: (id: string) => void;
};

export const FormCreatorListElement = ({
  item,
  deleteInput,
}: FormCreatorListElementProps) => {
  return (
    <li>
      <div>
        <label htmlFor={`input-${item.id}`}>{item.label}</label>
        <input type="text" name={`input-${item.id}`} id={`input-${item.id}`} />
      </div>
      <button type="button" onClick={() => deleteInput(item.id)}>
        Delete input
      </button>
    </li>
  );
};
