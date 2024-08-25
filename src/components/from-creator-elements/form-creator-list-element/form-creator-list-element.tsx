import { InputElementT } from "@/types";
import FormCreatorListEelementStyles from "@/components/from-creator-elements/form-creator-list-element/form-creator-list-element.module.scss";

type FormCreatorListElementProps = {
  item: InputElementT;
  deleteInput: (id: string) => void;
};

export const FormCreatorListElement = ({
  item,
  deleteInput,
}: FormCreatorListElementProps) => {
  return (
    <li className={FormCreatorListEelementStyles.wrapper}>
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
