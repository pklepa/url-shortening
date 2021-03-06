import React from "react";
import styled from "styled-components";

import LogoImg from "../assets/images/logo-white.svg";

import Icon1 from "../assets/icons/IconFacebook";
import Icon2 from "../assets/icons/IconTwitter";
import Icon3 from "../assets/icons/IconPinterest";
import Icon4 from "../assets/icons/iconInstagram";

function Footer() {
  return (
    <Container>
      <InnerContainer>
        <div className="logo-wrapper">
          <Logo src={LogoImg} alt="Shortly logo" />
        </div>

        <div className="links-wrapper">
          <Links>
            <h1>Features</h1>

            <span>Link Shortening</span>
            <span>Branded Links</span>
            <span>Analytics</span>
          </Links>

          <Links>
            <h1>Resources</h1>

            <span>Blog</span>
            <span>Developers</span>
            <span>Support</span>
          </Links>

          <Links>
            <h1>Company</h1>

            <span>About</span>
            <span>Our Team</span>
            <span>Careers</span>
            <span>Contact</span>
          </Links>

          <SocialLinks>
            <IconWrapper href="https://facebook.com">
              <Icon1 />
            </IconWrapper>

            <IconWrapper href="https://twitter.com">
              <Icon2 />
            </IconWrapper>

            <IconWrapper href="https://pinterest.com">
              <Icon3 />
            </IconWrapper>

            <IconWrapper href="https://instagram.com">
              <Icon4 />
            </IconWrapper>
          </SocialLinks>
        </div>
      </InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  background-color: ${(props) => props.theme.colors.dark_violet};
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(100%, 1240px);
  background-color: ${(props) => props.theme.colors.dark_violet};

  padding: 4rem 2rem;

  > div {
    display: flex;
    flex-direction: column;

    & > div:not(:last-child) {
      margin-bottom: 2.5rem;
    }
  }

  @media ${(props) => props.theme.devices.tablet} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    .links-wrapper {
      flex-direction: row;
      flex: 2;
      justify-content: space-between;

      & > div:not(:last-child) {
        margin: 0 3rem 0 0;
      }
    }

    .logo-wrapper {
      flex: 1;
    }
  }
`;

const Logo = styled.img`
  margin-bottom: 2rem;
  width: 150px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.colors.white};
    font-weight: 700;

    margin-bottom: 1rem;
  }

  span {
    color: ${(props) => props.theme.colors.grey_violet};
    margin-bottom: 0.3rem;
    transition: color 0.2s;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.cyan};
    }
  }

  @media ${(props) => props.theme.devices.tablet} {
    align-items: flex-start;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;

  > *:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const IconWrapper = styled.a`
  color: ${(props) => props.theme.colors.white};
  transition: color 0.2s;

  > svg {
    fill: currentColor;
  }

  &:hover {
    color: ${(props) => props.theme.colors.cyan};
  }
`;

export default Footer;
