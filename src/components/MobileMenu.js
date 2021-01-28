import React from "react";
import styled from "styled-components";

function MobileMenu({ showMenu }) {
  return (
    <Container visible={showMenu}>
      <NavItem>Features</NavItem>
      <NavItem>Pricing</NavItem>
      <NavItem>Resources</NavItem>

      <Separator />

      <NavItem>Login</NavItem>
      <NavItem>Sign Up</NavItem>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  z-index: 20;
  top: ${(props) => (props.visible ? "5rem" : "2rem")};
  right: 0;

  background-color: ${(props) => props.theme.colors.violet};
  width: ${(props) =>
    props.visible ? "min(calc(100% - 2rem), 400px)" : "50px"};
  height: ${(props) => (props.visible ? "auto" : "50px")};
  border-radius: ${(props) => (props.visible ? "10px" : "50%")};

  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: all 0.5s;

  padding: 2rem 1rem;
  margin: 0 1rem;

  & > button:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const NavItem = styled.button`
  color: ${(props) => props.theme.colors.white};
  background: none;
  outline: none;
  border: none;
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.text};
  text-align: center;
`;

const Separator = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.colors.grey};
  opacity: 0.2;
  margin-bottom: 1rem;
`;

export default MobileMenu;
