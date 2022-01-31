/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import Button from "../components/Button";
import aboutImg from "../assets/images/about-page-img.png";

const AboutPageStyle = styled.div`
  padding: 20rem 0 10rem 0;
  .top__section {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subHeading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem 1rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 2rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--grey-1);
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyle>
      <div className="container">
        <div className="top__section">
          <div className="left">
            <p className="about__subHeading">
              Hi, I am <span>Shihab Shumon</span>
            </p>
            <h2 className="about__heading">A Front-end Developer</h2>
            <div className="about__info">
              <PText>
                I am from chittagong, Bangladesh. A place of beauty and nature.
                Since my childhood, i love art and design. I always try to
                design stuff with my unique point of view. I also love to create
                things that can be usefull to others.
                <br /> <br />
                I started coding since I was in high school. Coding is also an
                art for me. I love it and now I have the opportunity to design
                along with the coding. I find it really interesting and I
                enjoyed the process a lot.
                <br /> <br />
                My vision is to make the world a better place. Now almost
                everything is becoming better than ever. It is time for us to
                create more good stuff that helps the world to become a better
                place.
                <br /> <br />
              </PText>
            </div>
            <Button btnText="Resume" btnLink="#" />
          </div>
          <div className="right">
            <img src={aboutImg} alt="shihab shumon img" />
          </div>
        </div>
      </div>
    </AboutPageStyle>
  );
}
