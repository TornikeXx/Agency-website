import React from "react";
import styled from "styled-components";
import Ilustration from "../../Assets/Images/Illustration.png";
import { under } from "../../BreakPoints";

const LandingPage = () => {
  return (
    <PageWrapper>
      <Context>
        <TextDiv>
          <Heading>Lessons and insigths</Heading>
          <ColoredHeading>from 8 years</ColoredHeading>
          <Text>
            Where to grow your business as a photographer: site or social media?
          </Text>
          <Button>
            <ButtonText>Register</ButtonText>
          </Button>
        </TextDiv>
        <Img src={Ilustration} alt="" />
      </Context>
    </PageWrapper>
  );
};

const ButtonText = styled.p`
  margin: 0px;
  font-size: 15px;
  font-weight: 500;
`;
const Img = styled.img`
  ${under.med`
display:none;
`}
`;
const PageWrapper = styled.div`
  background-color: #f5f7fa;
  padding: 70px 130px;
  ${under.med`
    overflow:hidden;
    max-width:100%;
    padding-left:20px;
    padding-right:20px;
    
  `}
`;
const Context = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextDiv = styled.div`
  ${under.med`
  text-align:center;
  alig-items:center;

`}
`;
const Heading = styled.p`
  font-size: 55px;
  font-weight: 600;
  color: #4d4d4d;
  margin: 0px;
  ${under.med`
    text-align:center;
    align-items:center;
  `}
`;
const ColoredHeading = styled(Heading)`
  color: #4caf4f;
`;
const Text = styled.p`
  color: #717171;
  font-size: 15px;
  font-weight: 400;
`;
const Button = styled.button`
  background-color: #4caf4f;

  border: 0px;
  border-radius: 10px;
  font-size: 25px;
  color: #ffffff;
  padding: 15px 25px;
  display: flex;
  align-items: center;
  font-size: 25px;
  text-align: center;
  &:hover {
    background-color: #f5f7fa;
    color: #4caf4f;
    transition: 0.3s;
    cursor: pointer;
  }
  ${under.med`
    display:none;
  `}
`;

export default LandingPage;
