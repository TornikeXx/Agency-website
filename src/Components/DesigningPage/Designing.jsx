import React from "react";
import styled from "styled-components";
import Img from "../../Assets/Images/Illustration.png";
import { under } from "../../BreakPoints";

const Designing = () => {
  return (
    <PageWrapper>
      <Image src={Img} alt="" />
      <TextDiv>
        <Heading>How to design your site footer like</Heading>
        <Heading>we did</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, optio
          explicabo. Qui ipsa impedit est magnam, odio sequi voluptates quae non
          nesciunt dolorum saepe recusandae illo tenetur facere, similique
          repellendus.
        </Text>
        <Button>
          <ButtonText>Learn more</ButtonText>
        </Button>
      </TextDiv>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  margin: 60px 130px;
  display: flex;
  gap: 170px;
  align-items: center;
  justify-content: space-between;
  ${under.med`
    margin:30px 20px;
  `}
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
    background-color: white;
    color: #4caf4f;
    transition: 0.3s;
    cursor: pointer;
  }
`;
const Image = styled.img`
  ${under.med`
    display:none;
  `}
`;
const ButtonText = styled.p`
  margin: 0px;
  font-size: 15px;
  font-weight: 500;
`;
const TextDiv = styled.div`
  ${under.med`
  display:flex;
  flex-direction:column;
  align-items:center;
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

export default Designing;
