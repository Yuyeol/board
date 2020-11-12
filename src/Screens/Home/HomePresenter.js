import TodoList from "Components/TodoList/TodoList";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Add = styled.span`
  padding: 6px 11px;
  color: rgba(0, 0, 0, 0.5);
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  font-weight: 600;
`;

const InputForm = styled.form`
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
`;
const InputTitle = styled.input``;
const InputContents = styled.textarea``;

const InputBtn = styled.input``;

const HomePresenter = ({
  handleClick,
  handleSubmit,
  handleInput,
  handleCheck,
  handleDelete,
  todos,
  modal,
}) => {
  return (
    <Container>
      <TodoList
        todos={todos}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      ></TodoList>
      <Add onClick={handleClick}>Add +</Add>
      <InputForm active={modal === true} onSubmit={handleSubmit}>
        <InputTitle placeholder="title" onChange={handleInput} />
        <InputContents placeholder="contents" onChange={handleInput} />
        <InputBtn type="submit" onChange={handleSubmit}></InputBtn>
      </InputForm>
    </Container>
  );
};

export default HomePresenter;
