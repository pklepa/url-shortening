import React from "react";
import styled from "styled-components";

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
  font-size: 1rem;
  padding: 1rem 2.5rem;
  background-color: ${(props) => props.theme.colors.cyan};

  border: none;
  outline: none;
  border-radius: 2rem;
`;

export default Button;
