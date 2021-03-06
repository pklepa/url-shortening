import React from "react";
import styled from "styled-components";

function Layout({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  min-height: 150vh;
  width: 100%;

  position: relative;
`;

export const ColorBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  background-color: ${(props) => props.theme.colors.grey_light};

  margin-top: 10rem;

  @media ${(props) => props.theme.devices.tablet} {
    margin-top: 4rem;
  }
`;

export default Layout;
