import React from "react";
import styled from "styled-components";

function SearchLoading() {
  return (
    <Container>
      <svg
        style={{
          margin: "auto",
          background: "white",
          display: "block",
          shapeRendering: "auto",
        }}
        width="50px"
        height="50px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <rect x="17.5" y="28.5" width="15" height="43" fill="#292664">
          <animate
            attributeName="y"
            repeatCount="indefinite"
            dur="0.9433962264150942s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="13.449999999999996;28.5;28.5"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.18867924528301888s"
          ></animate>
          <animate
            attributeName="height"
            repeatCount="indefinite"
            dur="0.9433962264150942s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="73.10000000000001;43;43"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.18867924528301888s"
          ></animate>
        </rect>
        <rect x="42.5" y="28.5" width="15" height="43" fill="#667395">
          <animate
            attributeName="y"
            repeatCount="indefinite"
            dur="0.9433962264150942s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="17.2125;28.5;28.5"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.09433962264150944s"
          ></animate>
          <animate
            attributeName="height"
            repeatCount="indefinite"
            dur="0.9433962264150942s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="65.575;43;43"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.09433962264150944s"
          ></animate>
        </rect>
        <rect x="67.5" y="28.5" width="15" height="43" fill="#94a9ce">
          <animate
            attributeName="y"
            repeatCount="indefinite"
            dur="0.9433962264150942s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="17.2125;28.5;28.5"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          ></animate>
          <animate
            attributeName="height"
            repeatCount="indefinite"
            dur="0.9433962264150942s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="65.575;43;43"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          ></animate>
        </rect>
      </svg>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.white};
  border-radius: 0.5rem;
  margin-top: 1rem;
  padding: 1rem 2rem;
`;

export default SearchLoading;
