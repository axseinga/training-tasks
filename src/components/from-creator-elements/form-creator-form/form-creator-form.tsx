type FormCreatorFormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  labelInput: string;
  setLabelInput: (param: string) => void;
  labelInputError: boolean;
};

export const FormCreatorForm = ({
  handleSubmit,
  labelInput,
  setLabelInput,
  labelInputError,
}: FormCreatorFormProps) => {
  return (
    <div>
      <h1>Form creator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user-input-label">Add new input</label>
          <input
            type="text"
            name="user-input-label"
            aria-describedby="user-input-label-validation"
            id="user-input-label"
            value={labelInput}
            onChange={(e) => setLabelInput(e.target.value)}
          />
          <button type="submit">Add input</button>
        </div>
        <p id="user-input-label-validation" aria-live="assertive" role="alert">
          {labelInputError && "This field cannot be empty"}
        </p>
      </form>
    </div>
  );
};
