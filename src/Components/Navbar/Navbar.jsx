import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../Assets/Images/Icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { under, over } from "../../BreakPoints";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavBarMainContainer>
        <LeftContainer>
          <LogoContainer>
            <img src={Logo} alt="" />
            <Header>Nexcent</Header>
          </LogoContainer>
        </LeftContainer>
        <RightContainer>
          <NavLinksContainer>
            <P>Home</P>
            <P>Features</P>
            <P>Community</P>
            <P>Blog</P>
            <P>Pricing</P>
            <Button>
              <ButtonText>Register now</ButtonText>
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </NavLinksContainer>
          <Hamburger
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
          </Hamburger>
        </RightContainer>
      </NavBarMainContainer>
      {extendNavbar && (
        <NavbarResponsiveContainer>
          <P>Home</P>
          <P>Features</P>
          <P>Community</P>
          <P>Blog</P>
          <P>Pricing</P>
          <Button>
            <ButtonText>Register now</ButtonText>
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </NavbarResponsiveContainer>
      )}
    </NavbarContainer>
  );
}

const Header = styled.h1`
  color: #263238;
  font-size: 25px;
`;
const P = styled.p`
  color: #4d4d4d;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #4caf4f;
    transition: 0.3s;
  }
`;

const ButtonText = styled.p`
  margin: 0px;
  font-size: 18px;
`;
const Button = styled.button`
  background-color: #4caf4f;

  border: 0px;
  border-radius: 10px;
  font-size: 25px;
  color: #ffffff;
  padding: 12px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  text-align: center;
  &:hover {
    background-color: #ffffff;
    color: #4caf4f;
    transition: 0.3s;
    cursor: pointer;
  }
`;
const NavbarContainer = styled.div`
  padding-left: 130px;
  padding-right: 130px;
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.extendNavbar ? "100vh" : "70px")};
  ${under.med`
    padding-left:20px;
    padding-right:20px
  `}
`;

const LeftContainer = styled.div`
  display: flex;
  flex: 30%;
`;
const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 70%;
`;

const NavBarMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const NavbarResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${over.med`
    display:none;
  `}
`;

const NavLinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  ${under.med`
    display:none;
  `}
`;
const LogoContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 7px;
`;

const Hamburger = styled.button`
  height: 50px;
  background: none;
  border: none;
  color: black;
  margin: 0px;
  font-size: 35px;
  cursor: pointer;
  ${over.med`
    display:none;
  `}
`;
export default Navbar;
