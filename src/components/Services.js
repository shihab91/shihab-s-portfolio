/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";
import uiux from "../assets/images/ui-ux.svg";
import webDesign from "../assets/images/web-design.svg";
import webDev from "../assets/images/web-dev.svg";

const ServiceSectionStyle = styled.div`
  padding: 10rem 0;
  .services__all__items {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__all__items {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;
export default function Services() {
  return (
    <ServiceSectionStyle>
      <div className="container">
        <SectionTitle heading="Services" subHeading="what i will do for you" />
        <div className="services__all__items">
          <ServicesSectionItem
            img={uiux}
            title="Web Design"
            description="I create websites that will bring value to your business. Here you can expect your dream website to built."
          />
          <ServicesSectionItem
            img={webDesign}
            title="Web Development"
            description="I also develop the websites. I create high performance websites blazing fast speed"
          />
          <ServicesSectionItem
            img={webDev}
            title="Responsive Design"
            description="I create responsive websites that will look great on any device. I can also make your website mobile friendly."
          />
        </div>
      </div>
    </ServiceSectionStyle>
  );
}
