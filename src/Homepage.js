import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import Main from "./Main";

const Homepage = () => {
  return (
    <Div>
      <Navbar />
      <Main />
    </Div>
  );
};
const Div = styled.div`
  background-color: #f0bc93;
  margin: 50px;
`;

export default Homepage;
