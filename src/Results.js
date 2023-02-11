import React from "react";
import UserCard from "./UserCard";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <Grid>
      {location.state.map((user) => {
        return (
          <UserCard
            key={user.id}
            avatar_url={user.avatar_url}
            login={user.login}
            html_url={user.html_url}
            followers_url={user.followers_url}
            repos_url={user.repos_url}
          />
        );
      })}
    </Grid>
  );
};
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px;
  justify-content: space-between;
  background-color: #fdf4e7;
`;

export default Results;
