/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PText from "./PText";
import SectionTitle from "./SectionTitle";
import aboutImg from "../assets/images/about-sec-img.svg";
import green from "../assets/images/green2.png";

const AboutSectionStyle = styled.div`
  padding: 15rem 0;
  background: url(${green}) no-repeat;
  background-position: 85% 100%;
  background-size: 30%;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .about__section__left,
  .about__section__right {
    flex: 1;
  }
  .section__title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .about__section__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .about__section__left {
      flex: 4;
    }
    .about__section__right {
      flex: 3;
    }
  }
  /* 
  !media queries for mobile or tablet devices
  */
  @media only screen and (max-width: 768px) {
    background: none;
    .container {
      flex-direction: column;
      text-align: center;
    }
    .about__section__left {
      width: 100%;
    }
    .about__section__right {
      width: 80%;
    }
    .about__section__right {
      margin-top: 3rem;
    }
    .section__title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .about__section__buttons {
      flex-direction: column;
      gap: 0;
    }
    .button__wrapper,
    a {
      width: 100%;
      text-align: center;
    }
  }
`;
export default function About() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="about__section__left">
          <SectionTitle
            subHeading="Let me introduce myself"
            heading="About me"
          />
          <PText>
            I am a front-end web developer from Dhaka , Bangladesh. I create
            professional websites. I love art and always try to show unique
            views to the audience through my website.
          </PText>
          <div className="about__section__buttons">
            <Button btnLink="/projects" btnText="Works" />
            <Button btnLink="/about" btnText="Read more" outlined />
          </div>
        </div>
        <div className="about__section__right">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
