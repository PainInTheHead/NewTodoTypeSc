
import Todo from "./Todo";
import { getFilteredTodos } from "./../utilites/selectors";
import { useAppSelector } from "../hook";
import { TodosWrap } from "../utilites/styletComponents";

const Todos: React.FC = () => {
  const filteredTodos = useAppSelector(getFilteredTodos);

  return (
    <TodosWrap className="todos">
      {filteredTodos.map((todo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </TodosWrap>
  );
};

export default Todos;
