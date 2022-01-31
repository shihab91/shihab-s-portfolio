/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PText from "./PText";

const ContactBannerStyle = styled.div`
  padding: 10rem 0;
  .contact__banner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contact__banner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contact__banner__heading {
      font-size: 2.8rem;
    }
  }
`;
export default function ContactBanner() {
  return (
    <ContactBannerStyle>
      <div className="container">
        <div className="contact__banner__wrapper">
          <PText>Have a project in mind</PText>
          <h3 className="contact__banner__heading">Let me help you</h3>
          <Button btnText="Contact now" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyle>
  );
}
