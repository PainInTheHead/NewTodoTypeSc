
import { clearHolder, clearComleted, openFiltered } from "../store/todoSlice";
import { useAppDispatch } from "../hook";

import { ButtonWrapper, Button } from "../utilites/styletComponents";

const Buttons: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
        <ButtonWrapper>
    <Button onClick={() => dispatch(clearHolder())} >
        Clear All
      </Button>
      <Button onClick={() => dispatch(openFiltered("all"))} >
        All
      </Button>
      <Button onClick={() => dispatch(openFiltered("active"))} >
        Active
      </Button>
      <Button
        onClick={() => dispatch(openFiltered("complete"))}
        
      >
        Complited
      </Button>
      <Button onClick={() => dispatch(clearComleted())} >
        Clear complited
      </Button>
    </ButtonWrapper>
  );
};

export default Buttons;
