/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import styled from "styled-components";
import ContactInfo from "./ContactInfo";
import SectionTitle from "./SectionTitle";

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
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
          <div className="right">contact form</div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
