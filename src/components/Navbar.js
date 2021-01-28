import React from "react";
import styled from "styled-components";
import HamburguerIcon from "./HamburguerIcon";

import Img from "../assets/images/logo.svg";
import Button from "./Button";

function Navbar({ showMenu, setShowMenu }) {
  return (
    <Container>
      <Logo src={Img} alt="Shortly logo" />
      <HamburguerIcon showMenu={showMenu} setShowMenu={setShowMenu} />

      <NavLinks>
        <div>
          <NavItem>Features</NavItem>
          <NavItem>Pricing</NavItem>
          <NavItem>Resources</NavItem>
        </div>

        <div>
          <NavItem>Login</NavItem>
          <LoginButton>Sign Up</LoginButton>
        </div>
      </NavLinks>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: min(100%, 1440px);
  padding: 2.5rem 2rem;

  @media ${(props) => props.theme.devices.tablet} {
    align-items: center;
  }
`;

const Logo = styled.img``;

const NavLinks = styled.div`
  display: none;

  @media ${(props) => props.theme.devices.tablet} {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 2rem;

    div {
      display: flex;
      align-items: center;

      & > span:not(:last-child) {
        margin-right: 2rem;
      }
    }
  }
`;

const NavItem = styled.span`
  color: ${(props) => props.theme.colors.grey_violet};
  font-weight: 700;
  transition: color 0.4s;

  &:hover {
    color: ${(props) => props.theme.colors.violet};
    cursor: pointer;
  }
`;

const LoginButton = styled(Button)`
  padding: 0.5rem 1.5rem;
`;

export default Navbar;
