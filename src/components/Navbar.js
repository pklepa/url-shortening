import React from "react";
import styled from "styled-components";
import HamburguerIcon from "./HamburguerIcon";

import Img from "../assets/images/logo.svg";

function Navbar() {
  return (
    <Container>
      <Logo src={Img} alt="Shortly logo" />
      <HamburguerIcon showMenu={false} />
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 2.5rem 1.5rem;
`;

const Logo = styled.img``;

export default Navbar;
