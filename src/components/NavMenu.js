/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdClose, MdMenu } from "react-icons/md";

const NavMenuStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.4rem 0;
  background-color: #0d1117;
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      &:hover {
        background-image: linear-gradient(
          90deg,
          rgb(77, 44, 210),
          rgb(58, 29, 176)
        );
      }
    }
    a {
      display: inline-block;
      font-family: "RobotoMono Regular";
      padding: 1rem 2rem;
      font-size: 2rem;
      color: #e4ecf5;
      outline: none;
    }
    .active {
      color: #e4ecf5;
      background-image: var(--deep-blue);
      border-radius: 8px;
    }
  }
  .mobile-menu-icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .close-nav-icon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-items {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .nav-items {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-image: var(--deep-blue);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
    }
    .close-nav-icon {
      display: block;
      width: 3rem;
      margin: 0 0 0 auto;
      cursor: pointer;
      * {
        pointer-events: none;
      }
    }
    li {
      display: block !important;
      margin-bottom: 1rem;
    }
  }
`;
export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavMenuStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? "nav-items hide-items" : "nav-items"}>
        <div
          className="close-nav-icon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/home"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  );
}
