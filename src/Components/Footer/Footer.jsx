import React from "react";
import styled from "styled-components";
import Logo from "../../Assets/Images/Icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { under } from "../../BreakPoints";

const Footer = () => {
  return (
    <PageWrapper>
      <LogoWrapper>
        <img src={Logo} alt="" />
        <H1>Nexcent</H1>
      </LogoWrapper>
      <LinksWrapper>
        <Button>
          <FontAwesomeIcon icon={faXTwitter} />
        </Button>
        <Button>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Button>
        <Button>
          <FontAwesomeIcon icon={faFacebook} />
        </Button>
      </LinksWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  padding: 80px 130px;
  background-color: #4caf4f;
  text-align: center;
  ${under.med`
    padding:30px;
  `}
`;
const H1 = styled.h1`
  color: #263238;
`;
const Button = styled.button`
  border-radius: 50%;
  background-color: #4caf4f;
  color: white;
  border: 1px solid #3e363f;
  padding: 25px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #4caf4f;
    border: 1px solid white;
    transition: 0.3s;
  }
`;
const LinksWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  gap: 35px;
`;
const LogoWrapper = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;

export default Footer;
