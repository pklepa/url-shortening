import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
  font-size: 1rem;
  padding: 1rem 2.5rem;
  background-color: ${(props) => props.theme.colors.cyan};

  border: none;
  outline: none;
  border-radius: 2rem;

  transition: filter 0.4s;

  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`;

export default Button;
