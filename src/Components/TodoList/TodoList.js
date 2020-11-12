import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const Container = styled.div``;

const TodoList = ({ todos, handleCheck, handleDelete }) => {
  const todoList = todos.map((todo) => (
    <TodoItem
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      key={todo.id}
      {...todo}
    />
  ));
  return <Container>{todoList}</Container>;
};

export default TodoList;
