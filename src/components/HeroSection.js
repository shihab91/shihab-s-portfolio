/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React from "react";
import heroImg from "../assets/images/hero.png";
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
          <PText/>
        </div>
      </div>
    </div>
  );
}
