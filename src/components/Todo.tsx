import React from "react";
import { useAppDispatch } from "../hook";
import {
  toggleTodo,
  deleteTodo,
  editTitleTodo,
  editorTodo,
} from "./../store/todoSlice";
import { TodoWrapper, TodoMainContent, InputNew, DeleteBtn, AcceptBtn } from "../utilites/styletComponents";

interface TodoProps {
  id: string;
  title: string;
  done: boolean;
  isEdit: boolean;
}

const Todo: React.FC<TodoProps> = ({ id, title, done, isEdit }) => {
  const dispatch = useAppDispatch();

  const goToggle = () => {
    dispatch(toggleTodo(id));
  };

  const goDelete: React.MouseEventHandler<HTMLImageElement> = (e) => {
    e.stopPropagation();
    dispatch(deleteTodo(id));
  };

  const handleEdit = () => {
    dispatch(editorTodo(id));
    if (done) {
      dispatch(editorTodo(id));
    }
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(editTitleTodo({ id: id, title: e.target.value }));
  };

  const handleWrapperDoubleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const targetElem = e.target as Element
    if (targetElem.classList.contains("accept")) {
      e.stopPropagation();
    }
  };

  const editTextTodo = () => {
    dispatch(editorTodo(id));
  };

  return (
    <TodoWrapper
      onDoubleClick={handleEdit}
      className={done ? "done" : isEdit ? "edit" : ""}
      key={id}
    >
      <TodoMainContent
        onDoubleClick={handleWrapperDoubleClick}
      >
        <AcceptBtn
          src={done ? "./accetp.png" : "./noaccept.png"}
          alt="accept"
          onClick={goToggle}
        ></AcceptBtn>
        {isEdit ? (
          <InputNew
            type="text"
            value={title}
            onChange={handleInputChange}
            onBlur={editTextTodo}
          />
        ) : (
          <span>{title}</span>
        )}
      </TodoMainContent>
      <DeleteBtn
        src="./deletebut.png"
        alt="delete"
        onClick={goDelete}
      ></DeleteBtn>
    </TodoWrapper>
  );
};

export default Todo;
