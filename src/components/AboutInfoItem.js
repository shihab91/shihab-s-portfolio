/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";
import PText from "./PText";

const AboutItemStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3rem;
  position: relative;
  .title {
    font-size: 2.4rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 18rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`;
const a = "shiahb";
console.log("🚀 ~ file: AboutInfoItem.js ~ line 43 ~ a", a);

export default function AboutInfoItem({
  title = "this is title",
  items = ["HTML", "CSS", "JS"],
}) {
  return (
    <AboutItemStyle>
      <h1 className="title">{title} </h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item} </PText>
          </div>
        ))}
      </div>
    </AboutItemStyle>
  );
}
