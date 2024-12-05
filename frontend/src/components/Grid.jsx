import React from "react";
import styled from "styled-components";

const Grid = ({ children, ...props }) => {
  return (
    <GridC className="flex min-h-screen flex-col justify-between " {...props}>
      <Wrapper> {children} </Wrapper>
    </GridC>
  );
};

const GridC = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #000;

  background-image: linear-gradient(
      rgba(10, 50, 255, 0.15) 0.1em,
      transparent 0.1em
    ),
    linear-gradient(90deg, rgba(10, 50, 255, 0.15) 0.1em, transparent 0.1em);
  background-size: 2em 2em;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

export default Grid;
