import React from "react";
import styled from "styled-components";

const Tag = (props) => {
  const { text, type } = props;
  return <Span type={type}>{text}</Span>;
};
const Span = styled.span`
  font-size: 15px;
  padding: 4px 8px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.type === "language" ? "#e0fbf6" : "#ece7fe"};
  color: ${(props) => (props.type === "language" ? "#58c2a9" : "#8972f3")};
`;

export default Tag;
