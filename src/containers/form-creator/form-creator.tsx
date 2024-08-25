import { useEffect, useState } from "react";
import { InputElementT } from "@/types";
import { FormCreatorForm } from "@/components/from-creator-elements/form-creator-form/form-creator-form";
import { FormCreatorInputsView } from "@/components/from-creator-elements/form-creator-inputs-view/form-creator-inputs-view";
import FormCreatorStyles from "@/containers/form-creator/form-creator.module.scss";

export const FormCreator = () => {
  const [userInputs, setUserInputs] = useState<InputElementT[]>([]);
  const [labelInput, setLabelInput] = useState("");
  const [labelInputError, setLabelInputError] = useState(false);

  useEffect(() => {
    if (labelInput) {
      setLabelInputError(false);
    }
  }, [labelInput]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (labelInput === "") {
      setLabelInputError(true);
      return;
    } else {
      setLabelInputError(false);
      const newInput = {
        id: Date.now().toString(),
        label: labelInput,
      };

      setUserInputs([...userInputs, newInput]);
      setLabelInput("");
    }
  };

  const deleteInput = (id: string) => {
    const updatedUserInputs = userInputs.filter((input) => input.id !== id);
    setUserInputs(updatedUserInputs);
  };

  return (
    <div className={FormCreatorStyles.wrapper}>
      <div>
        <FormCreatorForm
          handleSubmit={handleSubmit}
          labelInput={labelInput}
          setLabelInput={setLabelInput}
          labelInputError={labelInputError}
        />
        <FormCreatorInputsView items={userInputs} deleteInput={deleteInput} />
        <div className={FormCreatorStyles.JSONWrapper}>
          <h2>Array as JSON</h2>
          <pre>{JSON.stringify(userInputs, null, 2)}</pre>
        </div>
        <button
          type="button"
          onClick={() => alert(JSON.stringify(userInputs, null, 2))}
        >
          Show JSON in alert
        </button>
      </div>
    </div>
  );
};
