/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import About from "../components/About";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <ProjectSection />
    </>
  );
}
