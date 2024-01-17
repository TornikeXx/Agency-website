import React from "react";
import styled from "styled-components";
import Logo1 from "../../Assets/Images/Logo (2).png";
import Logo2 from "../../Assets/Images/Logo (3).png";
import Logo3 from "../../Assets/Images/Logo (4).png";
import Logo4 from "../../Assets/Images/Logo (5).png";
import Logo5 from "../../Assets/Images/Logo (6).png";
import Logo6 from "../../Assets/Images/Logo (7).png";
import Logo7 from "../../Assets/Images/Logo (8).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../Hooks/useFetch";
import { APIRoutes } from "../../Utils/api";
import { under } from "../../BreakPoints";

const Customer = () => {
  const { data, loading, error } = useFetch(APIRoutes.post);
  console.log("data:", data);
  return (
    <PageWrapper>
      {data
        ?.map(({ name, brand, text, company, id }) => (
          <>
            <Img src={brand} alt="" />
            <TextDiv>
              <Text>{text}</Text>
              <TextStyled>{name}</TextStyled>
              <LightText>{company}</LightText>
              <Brands>
                <img src={Logo1} alt="" />
                <img src={Logo2} alt="" />
                <img src={Logo3} alt="" />
                <img src={Logo4} alt="" />
                <img src={Logo5} alt="" />
                <img src={Logo6} alt="" />
                <img src={Logo7} alt="" />
                <Button>
                  <TextStyled>Meet all customers</TextStyled>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </Brands>
            </TextDiv>
          </>
        ))
        .slice(1)}
    </PageWrapper>
  );
};

const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 7px;
  color: #4caf4f;
  ${under.med`
  display:none;
  `}
`;

const PageWrapper = styled.div`
  padding-left: 130px;
  padding-right: 130px;
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #f5f7fa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 120px;
  ${under.med`
    flex-direction:column;
    padding-left:20px;
    padding-right:20px;
    gap:30px;
    paddig-top:20px;
    align-items:center;
    text-align:center;
    padding-bottom:30px;
  `}
`;
const Brands = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
`;
const TextStyled = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #4caf4f;
`;
const Img = styled.img`
  width: 330px;
  border-radius: 10px;
`;
const TextDiv = styled.div``;
const Text = styled.p`
  color: #717171;
  font-size: 15px;
  font-weight: 500;
  margin-top: 0px;
`;
const LightText = styled(Text)`
  font-weight: 300;
  color: #89939e;
`;

export default Customer;
