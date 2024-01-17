import React from "react";
import styled from "styled-components";
import Logo1 from "../../Assets/Images/Logo (2).png";
import Logo2 from "../../Assets/Images/Logo (3).png";
import Logo3 from "../../Assets/Images/Logo (4).png";
import Logo4 from "../../Assets/Images/Logo (5).png";
import Logo5 from "../../Assets/Images/Logo (6).png";
import Logo6 from "../../Assets/Images/Logo (7).png";
import Logo7 from "../../Assets/Images/Logo (8).png";
import { under } from "../../BreakPoints";

const Clients = () => {
  return (
    <PageWrapper>
      <TextDiv>
        <Heading>Our Clients</Heading>
        <Text>We have been working with some Fortune 500+ clients</Text>
      </TextDiv>
      <Logos>
        <img src={Logo1} alt="" />
        <img src={Logo2} alt="" />
        <img src={Logo3} alt="" />
        <img src={Logo4} alt="" />
        <img src={Logo5} alt="" />
        <img src={Logo6} alt="" />
        <img src={Logo7} alt="" />
      </Logos>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  margin-left: 130px;
  margin-right: 130px;
  margin-top: 30px;
  ${under.med`
    margin-left:20px;
    margin-right:20px;
  `}
`;
const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;
const TextDiv = styled.div`
  display: grid;
  justify-items: center;
  ${under.med`
  text-align:center;
  `}
`;
const Text = styled.p`
  color: #717171;
  font-size: 15px;
  font-weight: 400;
`;
const Heading = styled.p`
  margin: 0px;
  font-size: 30px;
  font-weight: 600;
  color: #4d4d4d;
`;

export default Clients;
