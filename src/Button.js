import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  //props.color가 있으면 props.color를, 그렇지 않으면 흰색을 배경색으로 사용합니다.
  background-color: ${(props) => (props.color ? props.color : "white")};
  //props.size가 "big"이면 200px을, 그렇지 않으면 100px을 너비로 사용합니다.
  width: ${(props) => (props.size === "big" ? "200px" : "100px")};
  //props.sizerk "big"이면 80px을, 그렇지 않으면 40px을 높으로 사용합니다.
  height: ${(props) => (props.size === "big" ? "80px" : "40px")};
`;

const Button = ({ color, size, text }) => (
  <StyledButton color={color} size={size}>
    {text}
  </StyledButton>
);

export default Button;
