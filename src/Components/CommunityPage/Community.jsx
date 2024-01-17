import React from "react";
import styled from "styled-components";
import Icon1 from "../../Assets/Images/Icon (2).png";
import Icon2 from "../../Assets/Images/Icon (3).png";
import Icon3 from "../../Assets/Images/Icon (4).png";
import { under } from "../../BreakPoints";

const Community = () => {
  return (
    <PageWrapper>
      <TextDiv>
        <Heading>Manage your entire community</Heading>
        <Heading>in a single system</Heading>
        <Text>Who is Nextcent suitable for?</Text>
      </TextDiv>
      <CardsDiv>
        <Card>
          <img src={Icon1} alt="" />
          <Heading>Memebership</Heading>
          <Heading>Organisations</Heading>
          <Text>
            Our membership management software provides full automation of
            membership renewals and payments
          </Text>
        </Card>
        <Card>
          <img src={Icon2} alt="" />
          <Heading>National</Heading>
          <Heading>Assosiations</Heading>
          <Text>
            Our membership management software provides full automation of
            membership renewals and payments
          </Text>
        </Card>
        <Card>
          <img src={Icon3} alt="" />
          <Heading>Clubs And</Heading>
          <Heading>Groups</Heading>
          <Text>
            Our membership management software provides full automation of
            membership renewals and payments
          </Text>
        </Card>
      </CardsDiv>
    </PageWrapper>
  );
};

const CardsDiv = styled.div`
  padding-top: 30px;
  display: flex;
  flex-grow: 1;
  gap: 50px;
  ${under.med`
    flex-direction:column;
    margin-left:60px;
    margin-right:60px;
    
  `}
`;

const Card = styled.div`
  border: 1px solid #e8f5e9;
  padding: 10px;
  display: grid;
  justify-items: center;
  text-align: center;
`;

const PageWrapper = styled.div`
  margin-left: 130px;
  margin-right: 130px;
  margin-top: 30px;
  margin-bottom: 30px;
  ${under.med`
    margin-left:20px;
    margin-right:20px;
    margin-top:60px;
  `}
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

export default Community;
