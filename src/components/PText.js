/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React from "react";
import styled from "styled-components";

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
  //? this is media query
  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;
export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}
