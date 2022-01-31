/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import projectImg from "../assets/images/projectImg.png";

const ProjectItemStyle = styled.div`
  .project__item__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .project__item__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
    .project__item__title {
      font-size: 2.2rem;
    }
    .project__item__description {
      font-size: 1.6rem;
      font-family: "RobotoMono Regular";
      margin-top: 1rem;
    }
  }
  @media only screen and (max-width: 768px) {
    .project__item__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = "Project Title",
  description = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet maiores minus, dicta",
}) {
  return (
    <ProjectItemStyle>
      <Link to="/projects" className="project__item__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="project__item__info">
        <Link to="#">
          <h3 className="project__item__title"> {title}</h3>
        </Link>
        <p className="project__item__description">{description}</p>
      </div>
    </ProjectItemStyle>
  );
}
