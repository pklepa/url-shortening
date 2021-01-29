import React, { useState } from "react";

import styled from "styled-components";
import axios from "axios";
import useWindowDimensions from "../assets/utils/useWindowDimensions";

import Img from "../assets/images/bg-shorten-mobile.svg";
import ImgDesktop from "../assets/images/bg-shorten-desktop.svg";

import Button from "./Button";
import SearchResult from "./SearchResult";

function SearchSection() {
  const { width } = useWindowDimensions();

  const [userInput, setUserInput] = useState("");
  const [hideTips, setHideTips] = useState(true);

  const [shortLinks, setShortLinks] = useState([]);

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Only shows tips after the user first changes the input
    if (!userInput && hideTips) setHideTips(false);

    axios
      .get(
        "https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html",
        { responseType: "json" }
      )
      .then((res) => {
        console.log(res);
        setShortLinks([
          ...shortLinks,
          { original: userInput, short: res.data.result.full_short_link },
        ]);
      })
      .then(() => {
        setUserInput("");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container>
      <Form
        style={{
          backgroundImage: width < 850 ? `url(${Img})` : `url(${ImgDesktop})`,
        }}
      >
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
        {shortLinks.map((item) => {
          return <SearchResult original={item.original} short={item.short} />;
        })}
      </ResultsContainer>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 3rem;

  width: min(100%, 1240px);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.violet};
  background-position: top right;
  background-repeat: no-repeat;

  border-radius: 0.8rem;
  width: 100%;
  padding: 1.5rem;

  margin-top: -100px;

  position: relative;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  @media ${(props) => props.theme.devices.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 3rem;
    margin-top: -68px;

    background-position: top right;
    background-size: cover;
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

  flex: 1;
  transition: all 0.4s;

  &:invalid {
    border: ${(props) => (props.hideTips ? "none" : "4px solid #F46262")};
    padding: ${(props) => (props.hideTips ? "1rem" : "calc(1rem - 4px)")};

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

  @media ${(props) => props.theme.devices.tablet} {
    width: auto;
    margin: 0 0 0 1rem !important;
  }
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 1rem;
`;

export default SearchSection;
