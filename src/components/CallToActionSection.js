import React from "react";
import Button from "./Button";

import Img from "../assets/images/bg-boost-mobile.svg";
import ImgDesktop from "../assets/images/bg-boost-desktop.svg";
import styled from "styled-components";

function CallToActionSection() {
  return (
    <Container style={{ backgroundImage: `url(${Img})` }}>
      <h1>Boost your links today</h1>
      <Button>Get Started</Button>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 5rem 2rem;

  background-color: ${(props) => props.theme.colors.violet};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    line-height: 1.3em;
    font-size: 1.6rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.white};

    text-align: center;

    margin-bottom: 1rem;
  }
`;

export default CallToActionSection;
