import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [position, setPosition] = useState("");
  const [language, setLanguage] = useState("");

  let navigate = useNavigate();
  const routeChange = (data) => {
    let path = `/results`;
    navigate(path, { state: data });
  };

  const handleFetch = async () => {
    const query = `https://api.github.com/search/users?q=${position}&l=${language}`;
    const response = await fetch(query);
    const data = await response.json();
    routeChange(data.items);
  };
  return (
    <FormWrapper>
      <FormContainer onSubmit={(e) => e.preventDefault()}>
        <BoxShadow>
          <input
            type="text"
            id="position"
            name="position"
            placeholder="Search for a position"
            onChange={(e) => {
              setPosition(e.target.value);
            }}
            value={position}
          />

          <input
            type="text"
            id="language"
            name="language"
            placeholder="Kotlin, C#, Java, etc."
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
            value={language}
          />
        </BoxShadow>
        <Button type="submit" value="Search" onClick={handleFetch}>
          Search
        </Button>
      </FormContainer>
    </FormWrapper>
  );
};
const FormWrapper = styled.div`
  margin-top: 30px;
`;
const Button = styled.button`
  padding: 15px;
  width: 15%;
  margin-left: 50px;
  background: url(/images/search.png) no-repeat scroll 15px 17px;
  background-color: #c8befe;
  padding-left: 35px;
  box-shadow: 10px 8px 0px 0px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 10px 8px 0px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 10px 8px 0px 0px rgba(0, 0, 0, 1);
  font-size: 1rem;
  cursor: pointer;
`;

const BoxShadow = styled.span`
  box-shadow: 10px 20px 0px 5px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 10px 20px 0px 5px rgba(0, 0, 0, 1);
  -moz-box-shadow: 10px 20px 0px 5px rgba(0, 0, 0, 1);
`;

const FormContainer = styled.form`
  & input[type="text"] {
    border: 2px solid #000;
    width: 30%;
    padding: 15px;
  }
  & input[type="text"]::placeholder {
    font-size: 1rem;
  }
  #position {
    border-right: none;
    background: url(/images/search.png) no-repeat scroll 7px 15px;
    background-color: white;
    padding-left: 35px;
  }

  #language {
    border-left: none;
    background: url(/images/html.png) no-repeat scroll 7px 15px;
    background-color: white;
    padding-left: 35px;
  }
  #position:focus,
  #language:focus {
    outline: none;
  }
`;
export default Form;
