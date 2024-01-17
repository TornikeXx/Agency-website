import React from "react";
import styled from "styled-components";
import Img from "../../Assets/Images/Frame 35 (1).png";
import { under } from "../../BreakPoints";

const Experience = () => {
  return (
    <PageWrapper>
      <Context>
        <Image src={Img} alt="" />
        <TextDiv>
          <Heading>The unseen of spending three</Heading>
          <Heading>years at Pixelgrade</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </Text>
          <Button>
            <ButtonText>Learn More</ButtonText>
          </Button>
        </TextDiv>
      </Context>
    </PageWrapper>
  );
};

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
const ButtonText = styled.p`
  margin: 0px;
  font-size: 15px;
  font-weight: 500;
`;
const Image = styled.img`
  ${under.med`
  display:none;
  `}
`;

const PageWrapper = styled.div`
  margin-left: 130px;
  margin-right: 130px;
  margin-bottom: 30px;
  ${under.med`
  margin-left:20px;
  margin-right:20px;
  margin-top:60px;
  `}
`;
const Context = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TextDiv = styled.div`
  ${under.med`
  text-align:center;
  display:flex;
  flex-direction:column;
  align-items:center;
`}
`;
const Text = styled.p`
  color: #717171;
  font-size: 15px;
  font-weight: 400;
  ${under.med`
    margin-top:30px;
    margin-bottom:30px;
  `}
`;
const Heading = styled.p`
  margin: 0px;
  font-size: 30px;
  font-weight: 600;
  color: #4d4d4d;
`;

export default Experience;
