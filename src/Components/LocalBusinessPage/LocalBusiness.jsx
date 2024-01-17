import React from "react";
import styled from "styled-components";
import Icon1 from "../../Assets/Images/Icon (7).png";
import Icon2 from "../../Assets/Images/Icon (8).png";
import Icon3 from "../../Assets/Images/Icon (9).png";
import Icon4 from "../../Assets/Images/Icon (10).png";
import useFetch from "../../Hooks/useFetch";
import { APIRoutes } from "../../Utils/api";
import { under } from "../../BreakPoints";

const LocalBusiness = () => {
  const { data, loading, error } = useFetch(APIRoutes.users);
  console.log("data:", data);
  return (
    <PageWrapper>
      <TextDiv>
        <HeadingDiv>
          <Heading>Helping a local</Heading>
          <ColoredHeading>business reinvent itself</ColoredHeading>
        </HeadingDiv>

        <Text>We reached here with our hard work and dedication</Text>
      </TextDiv>
      <DataWrapper>
        {data
          ?.map(({ name, members, clubs, payments, events, id }) => (
            <Datas key={id}>
              <Data>
                <Item>
                  <img src={Icon1} alt="" />
                  <Info>
                    <Heading>{members}</Heading>
                    <Text>Members</Text>
                  </Info>
                </Item>
                <Item>
                  <img src={Icon2} alt="" />
                  <Info>
                    <Heading>{clubs}</Heading>
                    <Text>Clubs</Text>
                  </Info>
                </Item>
              </Data>
              <Data>
                <Item>
                  <img src={Icon3} alt="" />
                  <Info>
                    <Heading>{events}</Heading>
                    <Text>Events</Text>
                  </Info>
                </Item>
                <Item>
                  <img src={Icon4} alt="" />
                  <Info>
                    <Heading>{payments}</Heading>
                    <Text>Clubs</Text>
                  </Info>
                </Item>
              </Data>
            </Datas>
          ))
          .slice(1)}
      </DataWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  padding-left: 130px;
  padding-right: 130px;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f7fa;
  ${under.med`
  padding-left:20px;
  padding-right:20px;
  flex-direction:column;
  text-align:center;

  `}
`;
const HeadingDiv = styled.div`
  margin-bottom: 15px;
`;
const Info = styled.div`
  display: grid;
`;
const DataWrapper = styled.div``;
const Datas = styled.div`
  align-items: center;
`;
const Data = styled.div`
  display: flex;
  gap: 100px;
  justify-content: space-between;
  flex-grow: 1;
  margin-bottom: 20px;
  ${under.med`
    margin-top:20px;
  `}
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Heading = styled.p`
  margin: 0px;
  font-size: 30px;
  font-weight: 600;
  color: #4d4d4d;
`;
const ColoredHeading = styled(Heading)`
  color: #4caf4f;
`;
const Text = styled.p`
  color: #717171;
  font-size: 15px;
  font-weight: 400;
  margin: 0px;
`;
const TextDiv = styled.div``;

export default LocalBusiness;
