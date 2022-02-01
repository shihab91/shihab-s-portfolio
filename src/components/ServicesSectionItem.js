/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React from "react";
import { MdDesktopMac } from "react-icons/md";
import styled from "styled-components";
import PText from "./PText";

const ItemStyle = styled.div`
  text-align: center;
  .services__section__icon img {
    width: 5rem;
  }
  .services__item__title {
    font-size: 2.5rem;
    font-family: "Montserrat SemiBold";
    margin: 1.5rem auto;
  }
  .para {
  }
`;
export default function ServicesSectionItem({
  img = <MdDesktopMac />,
  title = "Web Design",
  description = "We create websites that will bring value to your business. Here you can expect your dream website to built.",
}) {
  return (
    <ItemStyle>
      <div className="services__section__icon">
        <img src={img} alt="" />
      </div>
      <div className="services__item__title">{title} </div>
      <PText>{description} </PText>
    </ItemStyle>
  );
}
