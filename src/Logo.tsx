import styled from "styled-components"
import { Img, Title, Wrapper } from "./components/StyledComponent";

const MenuList = styled(Wrapper)`
  margin-top: 32px;
  font-size: 20px;
  a{
    text-decoration: none;
    color: white;
  }
`;
const Footer = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 50px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: end;
`;

export default function Logo(){
    return(
    <Wrapper>
      <Img path="icon.png" width="100px" height="100px"/>
      <Title>JW PARK</Title>
      <MenuList>
        <a href="#aboutme">About Me</a>
        <a href="#work">My Work</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
        <a href="#park">Park In Songdo</a>
      </MenuList>
      <Footer>
        <p>Made by JW PARK with REACT</p>
      </Footer>
    </Wrapper>
    )
}