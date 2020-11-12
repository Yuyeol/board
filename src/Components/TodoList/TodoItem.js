import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
`;

const Text = styled.div`
  display: flex;
  opacity: ${(props) => (props.active ? "0.5" : "1")};
`;

const Title = styled.span`
  width: 180px;
`;
const Contents = styled.span`
  width: ${(props) => (props.active ? "370px" : "400px")};
`;
const Time = styled.span``;

const Delete = styled.span`
  display: ${(props) => (props.active ? "inline" : "none")};
  opacity: 1;
  width: 30px;
  text-align: end;
`;

const TodoItem = ({
  id,
  title,
  contents,
  time,
  checked,
  handleCheck,
  handleDelete,
}) => {
  return (
    <Item>
      <Text active={checked === true} onClick={() => handleCheck(id)}>
        <Title>{title}</Title>
        <Contents active={checked === true}>{contents}</Contents>
        <Time>{time}</Time>
      </Text>
      <Delete active={checked === true} onClick={() => handleDelete(id)}>
        ❌
      </Delete>
    </Item>
  );
};

export default TodoItem;
