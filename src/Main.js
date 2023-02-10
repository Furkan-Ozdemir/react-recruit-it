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
        <Image src="/images/capybara.webp" alt="main" />
      </div>
    </MainWrapper>
  );
};
const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 3px;
  box-shadow: 7px 7px 0px 0px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 7px 7px 0px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 7px 7px 0px 0px rgba(0, 0, 0, 1);
`;
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
