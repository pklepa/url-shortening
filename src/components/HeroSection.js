import React from "react";
import styled from "styled-components";
import useWindowsDimensions from "../assets/utils/useWindowDimensions";

import Img from "../assets/images/illustration-working.svg";
import Button from "./Button";

function HeroSection() {
  const { width } = useWindowsDimensions();

  return (
    <Container>
      <Content>
        <h1>More than just shorter links</h1>
        <span>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </span>
        <Button>Get started</Button>
      </Content>
      <Illustration
        src={Img}
        alt="Person sitting on a desk, working on the computer"
        width={width}
      />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column-reverse;

  width: min(100%, 1240px);
  padding: 0 1rem;

  @media ${(props) => props.theme.devices.tablet} {
    /* display: grid; */
    /* grid-template-columns: 600px 1fr; */
    flex-direction: row;
    justify-content: space-between;
    padding: 4rem 2rem;
    align-items: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2em;
    color: ${(props) => props.theme.colors.violet};
    text-align: center;
  }

  span {
    text-align: center;
    font-weight: 500;
    color: ${(props) => props.theme.colors.grey};

    margin: 1rem 0;
  }

  @media ${(props) => props.theme.devices.tablet} {
    align-items: flex-start;
    margin-right: 1rem;

    h1 {
      font-size: 4rem;
      text-align: left;
      width: 600px;
    }

    span {
      text-align: left;
      width: 600px;
      margin-bottom: 2rem;
    }
  }
`;

const Illustration = styled.img`
  width: min(140%, 550px);
  margin-bottom: 1rem;

  align-self: ${(props) => (props.width > 600 ? "center" : "flex-start")};

  @media ${(props) => props.theme.devices.tablet} {
    width: 700px;
  }
`;

export default HeroSection;
