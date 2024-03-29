import {
  clearHolder,
  clearComleted,
  openFiltered,
} from "../../store/todoSlice";
import { useAppDispatch } from "../../hook";

import { NavButtonWrapper } from "./Butons.styles";

const Buttons: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <NavButtonWrapper>
      <button onClick={() => dispatch(clearHolder())}>Clear All</button>
      <button onClick={() => dispatch(openFiltered("all"))}>All</button>
      <button onClick={() => dispatch(openFiltered("active"))}>Active</button>
      <button onClick={() => dispatch(openFiltered("complete"))}>
        Completed
      </button>
      <button onClick={() => dispatch(clearComleted())}>Clear complited</button>
    </NavButtonWrapper>
  );
};

export default Buttons;
