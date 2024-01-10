import { useEffect } from "react";
import Form from "../components/Form/Form";
import CounterTodos from "../components/Counter/CounterTodos";
import Todos from "../components/Todos/Todos";
import Buttons from "../components/Buttons/Buttons";
import { useAppDispatch, useAppSelector } from "../hook";
import { fetchTodos } from "../store/todoSlice";
import { selectTodos } from "../utilites/selectors";
import { Container } from "./App.styles";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  const todos = useAppSelector(selectTodos);

  return (
    <Container>
      <h1 className="title">Todos</h1>
      <Form />
      <CounterTodos />
      {todos.length !== 0 && <Buttons />}
      <Todos />
    </Container>
  );
}

export default App;
