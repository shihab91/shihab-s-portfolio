/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SectionTitle from "./SectionTitle";

const ContactSectionStyle = styled.div`
  padding: 15rem 0;
  .contact__section__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contact__section__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background-color: var(--grey-1);
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    .contact__section__wrapper {
      flex-direction: column;
    }
    .contact__section__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;
export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Contact" subHeading="get in touch" />
        <div className="contact__section__wrapper">
          <div className="left">
            <ContactInfo icon={<MdLocalPhone />} text="+08801914608395" />
            <ContactInfo icon={<MdEmail />} text="shumonshihab@gmail.com" />
            <ContactInfo text="Gazipur, Dhaka, Bangladesh" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
