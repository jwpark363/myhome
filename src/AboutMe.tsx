import styled from "styled-components";
import { Avata, Title, Wrapper } from "./components/StyledComponent";
import { InfoJson } from "./components/UserInfo";

const InfoList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-top: 24px;
    color: white;
    font-size: 18px;
    span{
        inline-size: 250px;
        overflow-wrap: break-word;
        line-height: 1.2;
    }
`;

export default function AboutMe(){
    return(
    <Wrapper>
        <Title>About Me</Title>
        <Avata path="beachwork.png" width="250px" height="250px"/>
        <InfoList>
        {InfoJson.user.overview.map(info => <span>{info}</span>)}
        </InfoList>
    </Wrapper>
    )
}