import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../assets/utils/useWindowDimensions";

import Img from "../assets/images/bg-boost-mobile.svg";
import ImgDesktop from "../assets/images/bg-boost-desktop.svg";

import Button from "./Button";

function CallToActionSection() {
  const { width } = useWindowDimensions();

  return (
    <Container
      style={{
        backgroundImage: width < 850 ? `url(${Img})` : `url(${ImgDesktop})`,
      }}
    >
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

  @media ${(props) => props.theme.devices.tablet} {
    padding: 3rem 2rem;

    h1 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
  }
`;

export default CallToActionSection;
