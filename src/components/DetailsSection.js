import React from "react";
import styled from "styled-components";

import icon1 from "../assets/images/icon-brand-recognition.svg";
import icon2 from "../assets/images/icon-detailed-records.svg";
import icon3 from "../assets/images/icon-fully-customizable.svg";

function DetailsSection() {
  return (
    <Container>
      <Header>
        <h1>Advanced Statistics</h1>
        <span>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </span>
      </Header>

      <Cards>
        <Card className="first">
          <IconWrapper>
            <img src={icon1} alt="Icon" />
          </IconWrapper>
          <h1>Brand Recognition</h1>
          <span>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links instill confidence in your content.
          </span>
        </Card>

        <Card className="second">
          <IconWrapper>
            <img src={icon2} alt="Icon" />
          </IconWrapper>
          <h1>Detailed Records</h1>
          <span>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </span>
        </Card>

        <Card className="third">
          <IconWrapper>
            <img src={icon3} alt="Icon" />
          </IconWrapper>
          <h1>Fully Customizable</h1>
          <span>
            Improve brand awereness and content discoverability through
            customizable links, supercharging audience engagement.
          </span>
        </Card>

        <CyanLine />
      </Cards>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: min(100%, 1240px);

  padding: 0 1rem;
  margin: 3rem 0;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.violet};
    font-weight: 700;
    line-height: 1.2em;
    text-align: center;

    margin-bottom: 1.5rem;
  }

  span {
    color: ${(props) => props.theme.colors.grey};
    font-weight: 700;
    text-align: center;

    margin: 0 auto 2.5rem;
    max-width: 600px;
  }

  @media ${(props) => props.theme.devices.tablet} {
    h1 {
      font-size: 2.5rem;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  position: relative;

  @media ${(props) => props.theme.devices.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;

    align-items: flex-start;
    margin-bottom: 3rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 0.5rem;

  position: relative;
  padding: 4.5rem 2rem 2rem;
  margin: 3rem 0;

  z-index: 10;

  h1 {
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.violet};
    font-weight: 700;
    line-height: 1.2em;
    text-align: center;

    margin-bottom: 1.5rem;
  }

  span {
    color: ${(props) => props.theme.colors.grey};
    text-align: center;
  }

  @media ${(props) => props.theme.devices.tablet} {
    min-height: 310px;

    h1,
    span {
      text-align: left;
    }

    &.second {
      margin: 6rem 0 0;
    }

    &.third {
      margin: 9rem 0 0;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.violet};
  border-radius: 50%;

  width: 5rem;
  height: 5rem;

  position: absolute;
  top: 0;
  left: 50%;

  transform: translateY(-50%) translateX(-50%);

  img {
    width: 2.5rem;
  }

  @media ${(props) => props.theme.devices.tablet} {
    left: 4.5rem;
  }
`;

const CyanLine = styled.div`
  width: 10px;
  height: 70%;
  background-color: ${(props) => props.theme.colors.cyan};

  position: absolute;
  top: 15%;
  left: 50%;

  transform: translateX(-50%);

  @media ${(props) => props.theme.devices.tablet} {
    height: 10px;
    width: 70%;

    top: 50%;
    left: 15%;
    transform: translateY(-50%);
  }
`;

export default DetailsSection;
