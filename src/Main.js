import React from "react";
import styled from "styled-components";
import Form from "./Form";

const Main = () => {
  return (
    <MainWrapper>
      <div>
        <TextContainer>
          <h1>
            Easy way to get candidates for <FancySpan>your company!</FancySpan>
          </h1>
          <p>
            With Recruite.it just search for a role and a coding language.
            Within seconds most related candidates will show up for you
          </p>
        </TextContainer>
        <Form />
      </div>
      <div>
        <img
          style={{
            width: "100%",
            maxWidth: " 500px",
            height: "auto",
            borderRadius: "3px",
          }}
          src="/images/capybara.webp"
          alt="main"
        />
      </div>
    </MainWrapper>
  );
};
const TextContainer = styled.div`
  margin-right: 30px;
  & h1 {
    line-height: 1.2;
    padding-bottom: 20px;
  }
`;

const MainWrapper = styled.div`
  background-color: #fdf4e7;
  overflow: hidden;
  display: flex;
  padding: 40px;
  & h1 {
    font-size: 4rem;
    text-transform: uppercase;
  }
  & p {
    font-weight: 300;
    font-size: 1.5rem;
  }
`;
const FancySpan = styled.span`
  color: #d0f97a;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000;
`;
export default Main;
