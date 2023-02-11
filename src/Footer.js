import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Div>
      <img
        style={{ width: "50px" }}
        src="/images/airbnb.svg"
        alt="airbnb logo"
        title="they are hiring!"
      />
      <img
        style={{ width: "50px" }}
        src="/images/facebook.svg"
        alt="facebook logo"
        title="and using our service"
      />
      <img
        style={{ width: "50px" }}
        src="/images/google.svg"
        alt="google logo"
        title="to find the perfect candidate"
      />
      <img
        style={{ width: "50px" }}
        src="/images/netflix.svg"
        alt="netflix logo"
        title="search now !!!"
      />
    </Div>
  );
};
const Div = styled.div`
  background-color: #000;
  display: flex;
  justify-content: space-evenly;
  padding: 30px 0px;
`;
export default Footer;
