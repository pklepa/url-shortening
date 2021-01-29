import React, { useState } from "react";

import styled from "styled-components";
import Button from "./Button";

import Img from "../assets/images/bg-shorten-mobile.svg";
import SearchResult from "./SearchResult";

function SearchSection() {
  const [userInput, setUserInput] = useState("");
  const [hideTips, setHideTips] = useState(true);

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleSubmit(e) {
    // Only shows tips after the user first changes the input
    if (!userInput && hideTips) setHideTips(false);

    alert("oh, hi mark");

    setUserInput("");
  }

  return (
    <Container>
      <Form style={{ backgroundImage: `url(${Img})` }}>
        <UserInput
          value={userInput}
          onChange={handleChange}
          hideTips={hideTips}
          type="text"
          required
          placeholder="Shorten a link here..."
        />
        <UserTip hideTips={hideTips}>Please add a link</UserTip>

        <SearchButton onClick={handleSubmit}>Shorten it!</SearchButton>
      </Form>

      <ResultsContainer>
        <SearchResult />
      </ResultsContainer>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 3rem;

  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.colors.violet};
  background-position: top right;
  background-repeat: no-repeat;

  border-radius: 0.8rem;
  width: 100%;

  margin-top: -100px;

  position: relative;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const UserInput = styled.input`
  background-color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 0.5rem;

  outline: none;
  padding: 1rem;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.dark_violet};

  width: 100%;
  transition: all 0.4s;

  &:invalid {
    border: ${(props) => (props.hideTips ? "none" : "4px solid #F46262")};
    padding: ${(props) => (props.hideTips ? "1rem" : "calc(1rem - 4px)")};
    /* margin-bottom: ${(props) => (props.hideTips ? "1rem" : "0.5rem")}; */

    &::placeholder {
      color: ${(props) => (props.hideTips ? "none" : "#F46262")};
      opacity: 0.6;
    }
  }
`;

const UserTip = styled.span`
  display: ${(props) => (props.hideTips ? "none" : "block")};

  align-self: flex-start;
  color: #f46262;
  font-size: 14px;
  font-style: italic;

  margin-top: 0.3rem !important;
`;

const SearchButton = styled(Button)`
  width: 100%;
  border-radius: 0.5rem;
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2rem;
`;

export default SearchSection;
