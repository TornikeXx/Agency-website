import React from "react";
import styled from "styled-components";
import Img1 from "../../Assets/Images/image 18 (1).png";
import Img2 from "../../Assets/Images/image 19.png";
import Img3 from "../../Assets/Images/image 20.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { under } from "../../BreakPoints";

const Marketing = () => {
  return (
    <>
      <HeadingDiv>
        <Heading>Caring is the new marketing</Heading>
        <Info>
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.​
        </Info>
      </HeadingDiv>
      <PageWrapper>
        <Card>
          <img src={Img1} alt="" />
          <CardContext>
            <Text>Creating Streamlined Safeguarding Processes with OneRen</Text>
            <TextDiv>
              <StyledText>Readmore</StyledText>
              <FontAwesomeIcon icon={faArrowRight} />
            </TextDiv>
          </CardContext>
        </Card>
        <Card>
          <img src={Img2} alt="" />
          <CardContext>
            <Text>
              What are your safeguarding responsibilities and how can you manage
              them?
            </Text>
            <TextDiv>
              <StyledText>Readmore</StyledText>
              <FontAwesomeIcon icon={faArrowRight} />
            </TextDiv>
          </CardContext>
        </Card>
        <Card>
          <img src={Img3} alt="" />
          <CardContext>
            <Text>Revamping the Membership Model with Triathlon Australia</Text>
            <TextDiv>
              <StyledText>Readmore</StyledText>
              <FontAwesomeIcon icon={faArrowRight} />
            </TextDiv>
          </CardContext>
        </Card>
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.div`
  margin-left: 130px;
  margin-right: 130px;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${under.med`
  margin-left:20px;
  margin-right:20px;
  flex-direction:column;
  gap:30px;
  `}
`;
const Text = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #717171;
`;
const Card = styled.div`
  display: grid;
  justify-items: center;
  flex-grow: 1;
`;
const CardContext = styled.div`
  padding: 10px;
  background-color: #f5f7fa;
  text-align: center;
  width: 200px;
  border-radius: 10px;
  margin-top: -20%;
`;
const StyledText = styled(Text)`
  color: #4caf4f;
`;
const TextDiv = styled.div`
  display: flex;
  gap: 10px;
  color: #4caf4f;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const HeadingDiv = styled.div`
  margin-left: 130px;
  margin-right: 130px;
  margin-top: 60px;
  margin-bottom: 60px;
  text-align: center;
  ${under.med`
  margin-left:20px;
  margin-right:20px;
  text-align:center;
  `}
`;
const Info = styled.p`
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

export default Marketing;
