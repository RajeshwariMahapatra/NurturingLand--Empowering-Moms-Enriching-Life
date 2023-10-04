import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#da07da" : "#da07da")};
  background-color: ${(props) => (props.border ? "transparent" : "#da07da")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#A98FC1" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#A98FC1")};
    border: 1px solid #e0b5d9;
    color: ${(props) => (props.border ? "#A98FC1" : "#fff")};
  }
`;

