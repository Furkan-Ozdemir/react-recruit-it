import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <FormWrapper>
      <FormContainer>
        <BoxShadow>
          <input
            type="text"
            id="position"
            name="position"
            placeholder="Search for a position"
          />

          <input
            type="text"
            id="language"
            name="language"
            placeholder="Kotlin"
          />
        </BoxShadow>
        <input type="button" value="Search" />
      </FormContainer>
    </FormWrapper>
  );
};
const FormWrapper = styled.div``;

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
