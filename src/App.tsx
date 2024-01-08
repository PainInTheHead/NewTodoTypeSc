import { useEffect } from "react";
import Form from "./components/Form";
import CounterTodos from "./components/CounterTodos";
import Todos from "./components/Todos";
import Buttons from "./components/Buttons";
import { useDispatch, useSelector } from "react-redux";
// import { fetchTodos } from "./store/todoSlice";
import React from "react";
import { selectTodos } from "./utilites/selectors";

import { Container, Title } from "./utilites/styletComponents";

function App() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchTodos());
  // }, [dispatch]);
  const todos = useSelector(selectTodos);

  return (
    <Container>
      <Title className="title">Todos</Title>
      <Form />
      <CounterTodos />
      {todos.length !== 0 && <Buttons />}
      <Todos />
    </Container>
  );
}

export default App;
