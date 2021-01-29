import React, { useRef, useState } from "react";
import styled from "styled-components";

import Button from "./Button";

function SearchResult() {
  const linkRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(linkRef.current.textContent);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  }

  return (
    <Container>
      <div>
        <InitialLink>https://www.frontendmentor.io</InitialLink>
      </div>

      <div>
        <ShortLink ref={linkRef}>https://rel.ink/k4lKyk</ShortLink>
        <CopyButton isCopied={isCopied} onClick={handleClick}>
          {isCopied ? "Copied!" : "Copy"}
        </CopyButton>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  margin-top: 1rem;

  background-color: ${(props) => props.theme.colors.white};
  border-radius: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
  }

  @media ${(props) => props.theme.devices.tablet} {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 3rem;

    div {
      flex-direction: row;
      align-items: center;
    }
  }
`;

const InitialLink = styled.span`
  font-weight: 500;
  padding-bottom: 1rem;
  border-bottom: 1px solid #d3d3d3;

  @media ${(props) => props.theme.devices.tablet} {
    border: none;
    padding: 0;
  }
`;

const ShortLink = styled.span`
  color: ${(props) => props.theme.colors.cyan};
  padding: 1rem 0;
  font-weight: 500;

  @media ${(props) => props.theme.devices.tablet} {
    padding: 0 1rem;
  }
`;

const CopyButton = styled(Button)`
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  transition: all 0.4s;

  background-color: ${(props) =>
    props.isCopied ? props.theme.colors.violet : props.theme.colors.cyan};
`;

export default SearchResult;
