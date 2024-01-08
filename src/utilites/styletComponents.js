import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 50%;
  border: none;
  border-radius: 15px;
  text-decoration: none;
  color: white;
  background: #ffb173;
  box-shadow: 0 5px 0 #ff9540;
  margin: 0 5px;

  &:hover {
    ackground: #ff9540;
    box-shadow: none;
    position: relative;
    top: 5px;
  }
`;

export const MainInputForm = styled.div`
  display: flex;
  width: 100%;
  border: 2px solid #ff7100;
  border-radius: 10px;
  padding: 10px;
  outline: none;
  background-color: #ffffff;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 20px;
`;

export const ButtonIcon = styled.button`
  position: relative;
  width: 3vh;
  height: 3vh;
  margin-right: 4px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: #ffffff;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  }
`;

export const TodoWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffb173;
  position: relative;
  list-style-type: none;
  width: 100%;
  box-shadow: 1px 5px 6px 0 #ff9540;
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  margin: 5px auto;
  background-color: white;

  &.done {
    text-decoration: line-through;
    box-shadow: 1px 5px 1px 0 #c2ffbc;
  }

  &.edit {
    box-shadow: 1px 5px 1px 0 #4681ee;
  }
`;

export const TodoMainContent = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;

export const InputNew = styled.input`
  width: 100%;
`;

export const DeleteBtn = styled.img`
  width: 3vh;
  height: 3vh;
`;

export const AcceptBtn = styled.img`
  margin-right: 2vh;
  width: 3vh;
  height: 3vh;
`;

export const TodosWrap = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  margin-top: 10px;
`;
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  width: 50vh;
  border: 2px solid #ff9540;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 20px #ff9540;
  background-color: white;
  font-size: 3vh;
  > span + span {
    margin-left: 10px;
  }
`;

export const Container = styled.div`
  width: 80vh;
  height: 100%;
  margin: 10vh auto;
  border: 2px solid #ff9540;
  padding: 30px;
  border-radius: 30px;
  background-color: #ffebc5;
`;

export const Title = styled.h1`
  text-align: center;
  color: #ff7100;
  margin-bottom: 3vh;
`;
