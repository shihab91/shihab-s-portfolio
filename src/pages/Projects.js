/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import ProjectItem from "../components/ProjectItem";
import SectionTitle from "../components/SectionTitle";
import projectsData from "../assets/data/projects";

const ProjectStyle = styled.div`
  padding: 10rem 0;
  .projects__all__items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .project__search__bar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .project__search__bar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .project__search__bar .search__icon {
    position: absolute;
    width: 2rem;
    right: 1rem;
    path {
      color: var(--deep-dark);
    }
  }
  @media only screen and (max-width: 768px) {
    .project__search__bar,
    .project__search__bar form,
    .project__search__bar input {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [searchText, setSearchText] = useState("");
  const [projects, setProjects] = useState(projectsData);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjects(projectsData);
    }
  };
  useEffect(() => {
    if (searchText === "") return;
    setProjects(() =>
      projectsData.filter((item) =>
        item.name.toLocaleLowerCase().match(searchText.toLocaleLowerCase())
      )
    );
  }, [searchText]);
  return (
    <ProjectStyle>
      <div className="container">
        <SectionTitle heading="projects" subHeading="some of my recent works" />
        <div className="project__search__bar">
          <form action="">
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="Project Name"
            />
            <MdSearch className="search__icon" />
          </form>
        </div>
        <div className="projects__all__items">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              img={project.img}
              description={project.desc}
              title={project.name}
            />
          ))}
        </div>
      </div>
    </ProjectStyle>
  );
}
