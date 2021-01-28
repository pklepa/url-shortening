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

export default Layout;
