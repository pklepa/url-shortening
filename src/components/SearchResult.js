import React, { useRef, useState } from "react";
import styled from "styled-components";

import Button from "./Button";

function SearchResult() {
  const linkRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(linkRef.current.textContent);
    setIsCopied(true);
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

  background-color: ${(props) => props.theme.colors.white};
  border-radius: 1rem;

  div {
    display: flex;
    flex-direction: column;
  }
`;

const InitialLink = styled.span`
  padding-bottom: 1rem;
  border-bottom: 1px solid #d3d3d3;
  font-weight: 500;
`;

const ShortLink = styled.span`
  color: ${(props) => props.theme.colors.cyan};
  padding: 1rem 0;
  font-weight: 500;
`;

const CopyButton = styled(Button)`
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  transition: all 0.4s;

  background-color: ${(props) =>
    props.isCopied ? props.theme.colors.violet : props.theme.colors.cyan};
`;

export default SearchResult;
