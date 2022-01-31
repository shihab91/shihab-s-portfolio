/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import styled from "styled-components";
import PText from "./PText";
import SectionTitle from "./SectionTitle";

const TestimonialSectionStyle = styled.div`
  padding: 10rem 0;
  text-align: center;
  .testimonial__wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }
  .testimonial__info {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    margin-top: 5rem;
  }
  .testimonial__description {
    .para {
      text-align: center;
    }
  }
  .testimonial__name {
    margin-top: 4rem;
    font-family: "Montserrat Bold";
    font-size: 2.2rem;
  }
  .testimonial__title {
    font-size: 1.6rem;
    margin-top: 0.3rem;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }
`;

export default function Testimonial() {
  return (
    <TestimonialSectionStyle>
      <div className="container">
        <SectionTitle
          heading="TESTIMONIALS"
          subHeading="see what our clients say about us"
        />
        <div className="testimonial__wrapper">
          <SwitchTransition>
            <CSSTransition>
              <div className="testimonial__info">
                <div className="testimonial__description">
                  <PText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos eaque saepe dolore nam inventore. Illum itaque
                  </PText>
                </div>
                <h2 className="testimonial__name">Shihab Shumon</h2>
                <p className="testimonial__title">CEO, Shihab Shumon</p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div className="prev">
            <MdArrowBack />
          </div>
          <div className="next">
            <MdArrowForward />
          </div>
        </div>
      </div>
    </TestimonialSectionStyle>
  );
}
