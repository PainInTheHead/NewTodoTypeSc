import { useState } from "react";
import { useDispatch } from "react-redux";
import { putTodo, allSelected } from "./../store/todoSlice";
import { useAppDispatch } from "../hook";
import { ButtonIcon, MainInputForm, Input } from "../utilites/styletComponents";

const Form: React.FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(putTodo(value));
        setValue("");
      }}
    >
      <MainInputForm>
        <ButtonIcon
          type="button"
          onClick={() => {
            dispatch(allSelected());
          }}
        >
          <img src="./select.png"></img>
        </ButtonIcon>
        <Input
          type="text"
          placeholder="add yours txt..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <ButtonIcon type="submit" className="inputbtn">
          <img src="./add.png"></img>
        </ButtonIcon>
      </MainInputForm>
    </form>
  );
};

export default Form;
