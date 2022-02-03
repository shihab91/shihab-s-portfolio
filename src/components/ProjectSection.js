/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import projects from "../assets/data/projects";
import ProjectItem from "./ProjectItem";
import img from "../assets/images/image3.svg";
import blue from "../assets/images/green2.png";

SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
  padding: 10rem 0;
  background: url(${img}) no-repeat, url(${blue}) no-repeat;
  background-position: 110% 110%, 10% 20%;
  background-size: 30%, 30%;
  .projects__all__item {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background-image: var(--deep-blue);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--grey-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    background: none;
    .projects__all__item {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 1rem;
      gap: 5rem;
      .project__item__img {
        width: 100%;
      }
    }
  }
`;
export default function ProjectSection() {
  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle heading="projects" subHeading="some of my recent works" />
        <div className="projects__all__item">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => {
              if (index >= 6) return;
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    title={project.name}
                    img={project.img}
                    description={project.desc}
                    link={project.link}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  );
}
