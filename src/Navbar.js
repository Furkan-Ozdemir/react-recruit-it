import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <span>Recruite.it</span>
    </Nav>
  );
};
const Nav = styled.nav`
  background-color: #fdf4e7;
  border-bottom: 2px solid #000;
  padding: 20px 40px 20px 40px;
  & span {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2rem;
  }
`;

export default Navbar;
