import React from "react";
import styled from "styled-components";

function HamburguerIcon({ showMenu, setShowMenu }) {
  const config = {
    heightIcon: "24px",
    widthLine: "30px",
    heightLine: "4px",

    transitionTime: "0.4s",
    rotation: "45deg",
    translateY: "12px",
    translateX: 0,
  };

  return (
    <Icon
      className={showMenu ? "active" : ""}
      onClick={() => {
        setShowMenu(!showMenu);
      }}
      id="hamburger-icon"
      href="#"
      title="Menu"
      myConfig={{ ...config }}
    >
      <span className="line line-1"></span>
      <span className="line line-2"></span>
      <span className="line line-3"></span>
    </Icon>
  );
}

const Icon = styled.a`
  width: ${(props) => props.myConfig.widthLine};
  height: ${(props) => props.myConfig.heightIcon};
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;

  z-index: 100;

  .line {
    background: ${(props) => props.theme.colors.grey_violet};
    width: ${(props) => props.myConfig.widthLine};
    height: ${(props) => props.myConfig.heightLine};
    position: absolute;
    left: 0;
    /* border-radius: calc(${(props) => props.myConfig.heightLine} / 2); */
    transition: all ${(props) => props.myConfig.transitionTime};

    &.line-1 {
      top: 0;
    }
    &.line-2 {
      top: 50%;
    }
    &.line-3 {
      top: 100%;
    }
  }

  &:hover,
  &:focus {
    .line-1 {
      transform: translateY(
        calc(${(props) => props.myConfig.heightLine} / 2 * -1)
      );
    }
    .line-3 {
      transform: translateY(calc(${(props) => props.myConfig.heightLine} / 2));
    }
  }

  &.active {
    .line-1 {
      transform: translateY(${(props) => props.myConfig.translateY})
        translateX(${(props) => props.myConfig.translateX})
        rotate(${(props) => props.myConfig.rotation});
    }
    .line-2 {
      opacity: 0;
      width: 0;
    }
    .line-3 {
      transform: translateY(calc(${(props) => props.myConfig.translateY} * -1))
        translateX(${(props) => props.myConfig.translateX})
        rotate(calc(${(props) => props.myConfig.rotation} * -1));
    }
  }

  @media ${(props) => props.theme.devices.tablet} {
    display: none;
  }
`;

export default HamburguerIcon;
