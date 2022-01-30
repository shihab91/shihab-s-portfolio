/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import About from "../components/About";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
    </>
  );
}
