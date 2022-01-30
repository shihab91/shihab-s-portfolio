/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outlined ? "transparent" : "var(--grey-1)"};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--grey-1);
    color: ${(props) => (props.outlined ? "var(--grey-1)" : "black")};
  }
  @media only screen and (min-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;
export default function Button({
  btnLink = "Test",
  btnText = "Test",
  outlined = false,
}) {
  return (
    <ButtonStyle outlined={outlined} className="button__wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
