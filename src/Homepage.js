import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import Main from "./Main";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <Div>
      <Navbar />
      <Main />
      <Footer />
    </Div>
  );
};
const Div = styled.div`
  background-color: #f0bc93;
  margin: 50px;
`;

export default Homepage;
