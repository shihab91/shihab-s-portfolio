/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";

const FooterStyle = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Shihab Shumon</h1>
          <PText>
            I am a front-end web developer from Dhaka , Bangladesh. I create
            professional websites. I love art and always try to show unique
            views to the audience through my website.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol />
        </div>
        <div className="footer__col3">
          <FooterCol />
        </div>
        <div className="footer__col4">
          <FooterCol />
        </div>
      </div>
    </FooterStyle>
  );
}
