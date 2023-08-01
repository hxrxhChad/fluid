import React from "react";
import { styled } from "styled-components";

const Header = () => {
  return (
    <Body>
      <h1>Hello</h1>
    </Body>
  );
};

export default Header;

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    justify-content: center;
    font-size: 20rem;
  }
`;
