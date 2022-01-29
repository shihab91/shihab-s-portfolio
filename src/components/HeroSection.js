/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React from "react";
import heroImg from "../assets/images/hero.png";
import Button from "./Button";
import PText from "./PText";

export default function HeroSection() {
  return (
    <div>
      <div className="container">
        <h1 className="hero__heading">
          <span>Hello, This is</span>
          <span>Shihab Shumon</span>
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
      </div>
    </div>
  );
}
