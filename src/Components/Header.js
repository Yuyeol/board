import React from "react";
import styled from "styled-components";

const SHeader = styled.header`
  display: flex;
  width: 800px;
`;

const Title = styled.span``;

const Item = styled.a`
  /* background-color: green; */
  /* color: white; */
  border-radius: 5px;
  width: 100px;
  text-align: center;
`;

const Header = () => (
  <SHeader>
    <Title>My Board</Title>
    <Item href="#">Todo List</Item>
    <Item href="#">...</Item>
    <Item href="#">...</Item>
    <Item href="#">...</Item>
  </SHeader>
);

export default Header;
