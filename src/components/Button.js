/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-image: ${(props) =>
      props.outlined ? "transparent" : "var(--deep-blue)"};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: ${(props) => (props.outlined ? "2px solid #4a51f0" : "none")};
    color: ${(props) => (props.outlined ? "var(--grey-1)" : "white")};
    transition: ease 0.3s transform;
    &:hover {
      transform: scale(0.95);
    }
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
