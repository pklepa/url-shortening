import React from "react";
import styled from "styled-components";
import HamburguerIcon from "./HamburguerIcon";

import Img from "../assets/images/logo.svg";

function Navbar({ showMenu, setShowMenu }) {
  return (
    <Container>
      <Logo src={Img} alt="Shortly logo" />
      <HamburguerIcon showMenu={showMenu} setShowMenu={setShowMenu} />
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  padding: 2.5rem 1.5rem;
`;

const Logo = styled.img``;

export default Navbar;
