import React from "react";
import UserCard from "./UserCard";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Form from "./Form";

const Results = () => {
  const location = useLocation();
  console.log(location.state.data);
  return (
    <Grid>
      <Nav>
        <header>Recruite.it</header>
        <Form buttonText={"Make another search"} />
      </Nav>
      <div>
        {location.state.data.map((user) => {
          return (
            <UserCard
              language={location.state.language}
              position={location.state.position}
              key={user.id}
              avatar_url={user.avatar_url}
              login={user.login}
              html_url={user.html_url}
              followers_url={user.followers_url}
              repos_url={user.repos_url}
            />
          );
        })}
      </div>
    </Grid>
  );
};
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #fdf4e7;
  border-bottom: 2px solid #000;

  header {
    font-size: 2rem;
    font-weight: 700;
    color: #000;
  }
  button {
    padding: 15px;
    margin-left: 50px;
    width: auto;
    background: url(/images/search.png) no-repeat scroll 15px 17px;
    background-color: #c8befe;
    padding-left: 35px;
    box-shadow: 10px 8px 0px 0px rgba(0, 0, 0, 1);
    -webkit-box-shadow: 10px 8px 0px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 10px 8px 0px 0px rgba(0, 0, 0, 1);
    font-size: 1rem;
    cursor: pointer;
  }
`;
const Grid = styled.div`
  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  margin: 50px;
  margin-right: auto;
  background-color: #fdf4e7;
`;

export default Results;
