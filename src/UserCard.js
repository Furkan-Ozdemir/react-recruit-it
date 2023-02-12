import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Tag from "./Tag";

const UserCard = (props) => {
  const { avatar_url, login, html_url } = props;
  const location = useLocation();
  const { language, position } = location.state;
  return (
    <Div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <img
          style={{ width: "100px", borderRadius: "50%", padding: "10px" }}
          src={avatar_url}
          alt="user avatar"
        />
        <h3>{login}</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Tag text={language} type="language" />
          <Tag text={position} type="position" />
        </div>
      </div>
      <button
        id="githubPage"
        onClick={() => window.open(html_url, "_blank", "noopener noreferrer")}
      >
        Github Page
      </button>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 1);
  width: 400px;
  margin: 20px 100px 30px 100px;
  #githubPage {
    text-decoration: none;
    color: #000;
    padding: 15px;
    margin: 0px 20px 30px 20px;
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

export default UserCard;
