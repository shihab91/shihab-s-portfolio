/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavMenu from "./components/NavMenu";
import SmoothScrollBar from "./components/SmoothScrollBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <>
      <Router>
        <NavMenu className="shihab shumon" />
        <SmoothScrollBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </SmoothScrollBar>
      </Router>
    </>
  );
}
