/* eslint-disable no-new */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
import styled from "styled-components";
import green from "../assets/images/green2.png";
import heroImg from "../assets/images/hero.jpeg";
import blue from "../assets/images/purple.png";
import ScrollDownArrow from "../assets/images/scroll-down-arrow.svg";
import SocialMediaArrow from "../assets/images/social-media-arrow.svg";
import Button from "./Button";
import PText from "./PText";

const HeroStyles = styled.div`
  background: url(${blue}) no-repeat;
  background-position: 10% -20%;
  background-size: 30%;
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: url(${green}) no-repeat;
    background-position: 80% 110%;
    background-size: 30%;
  }
  .hero__heading {
    font-size: 2rem;
    margin-top: 10rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 8rem;
      font-family: "Montserrat SemiBold";
      color: transparent;
      background: conic-gradient(
        rgba(0, 212, 255, 1) 12%,
        #baabda 12%,
        #2ecc71 33%,
        #2ecce1 12%,
        #bacb5a 13%,
        #e7fbbe 33%,
        #e7fbbe 55%,
        #ffcbcb 55%,
        #ffcbcb 70%,
        rgba(255, 0, 136, 1) 70%,
        #b5deff 87%,
        #f7d1ba 87%,
        #f7e1ba 87%
      );
      background-size: 50%;
      background-clip: text;
      -webkit-background-clip: text;
      animation: expand-rev 0.5s ease forwards;
      cursor: pointer;
    }

    .hero__name:hover {
      animation: expand 0.5s ease forwards;
    }

    @keyframes expand {
      0% {
        background-size: 50%;
        background-position: 0 0;
      }
      20% {
        background-size: 55%;
        background-position: 0 1em;
      }
      100% {
        background-size: 325%;
        background-position: -10em -4em;
      }
    }

    @keyframes expand-rev {
      0% {
        background-size: 325%;
        background-position: -10em -4em;
      }
      20% {
        background-size: 55%;
        background-position: 0 1em;
      }
      100% {
        background-size: 50%;
        background-position: 0 0;
      }
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--grey-1);
    /* canvas {
      width: 900px !important;
      height: 600px !important;
    } */
  }
  .hero__info {
    margin-top: 3rem;
  }
  .hero__social,
  .hero__scroll__down {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 30px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scroll__down {
    right: 50px;
    img {
      max-height: 70px;
    }
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

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        transform: rotate(-90deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
        svg {
          width: 2.5rem;
        }
      }
    }
  }
  //! media queries starts from here
  @media only screen and (max-width: 768px) {
    background: none;
    .hero {
      min-height: 750px;
      background: none;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: 1rem;
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
      left: 5px;
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
      right: 5px;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;
const textReveal = {
  initial: {
    y: "200%",
  },
  animate: {
    y: "0%",
  },
};
const transition = {
  duration: 0.8,
  ease: [0.6, 0.05, -0.01, 0.9],
};

export default function HeroSection() {
  const heroImgRef = useRef(null);
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, This is</span>
            <motion.span className="hero__name">MD Shihab Shumon</motion.span>
          </h1>
          <div className="hero__img" ref={heroImgRef}>
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
                    <MdOutlineFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/shihab91/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/shihab-shumon/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/shihabshumon9/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
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
