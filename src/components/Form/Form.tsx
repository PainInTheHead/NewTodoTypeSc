import { useState } from "react";
import { putTodo, allSelected } from "../../store/todoSlice";
import { useAppDispatch } from "../../hook";
import { FormWrapper } from "./Form.styles";

const Form: React.FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  const submitFormHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(putTodo(value));
    setValue("");
  };

  return (
    <FormWrapper className="form" onSubmit={submitFormHandler}>
      <div className="input-con">
        <button
          className="btn-input-icon animate"
          type="button"
          onClick={() => {
            dispatch(allSelected());
          }}
        >
          <img src="./select.png" />
        </button>
        <input
          className="form-input"
          type="text"
          placeholder="add yours txt..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="btn-input-icon">
          <img src="./add.png"></img>
        </button>
      </div>
    </FormWrapper>
  );
};

export default Form;
