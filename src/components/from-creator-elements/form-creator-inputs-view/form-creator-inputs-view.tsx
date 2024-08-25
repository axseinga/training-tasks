import { InputElementT } from "@/types";
import { FormCreatorListElement } from "../form-creator-list-element/form-creator-list-element";
import FormCreatorInputsViewStyles from "./form-creator-inputs-view.module.scss";

type FormCreatorInputsViewProps = {
  items: InputElementT[];
  deleteInput: (id: string) => void;
};

export const FormCreatorInputsView = ({
  items,
  deleteInput,
}: FormCreatorInputsViewProps) => {
  return (
    <div className={FormCreatorInputsViewStyles.wrapper}>
      <h2>Your form:</h2>
      {items.length > 0 ? (
        <ul>
          {items.map((input, index) => (
            <FormCreatorListElement
              key={`${index}_${input.id}`}
              item={input}
              deleteInput={deleteInput}
            />
          ))}
        </ul>
      ) : (
        <p>No inputs yet. Start adding...</p>
      )}
    </div>
  );
};
