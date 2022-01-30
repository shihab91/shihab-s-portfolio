/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PText from "./PText";
import heroImg from "../assets/images/hero.png";
import SocialMediaArrow from "../assets/images/social-media-arrow.svg";
import ScrollDownArrow from "../assets/images/scroll-down-arrow.svg";

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 7rem;
      font-family: "Montserrat SemiBold";
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--grey-1);
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social,
  .hero__scroll__down {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scroll__down {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scroll__down {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scroll__down {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(-90deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 3.8rem;
      }
    }
    .hero__img {
      height: 300px !important;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;

        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scroll__down {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, This is</span>
            <span className="hero__name">Shihab Shumon</span>
          </h1>
          <div className="hero__img">
            <img src={heroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              I am working as a Front-end Developer for 1 year. I love to design
              and make new web experience for the people. I am a self-motivated
              and a team player.
            </PText>
            <Button btnLink="/projects" btnText="see my works" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="social media arrow" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/mdshihab.shumon.3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fb
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/shihab91/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GT
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/shihab-shumon/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/shihabshumon9/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IN
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scroll__down">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
