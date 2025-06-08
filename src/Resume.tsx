import styled from "styled-components";
import { Img, Title, Wrapper } from "./components/StyledComponent";
import { useState } from "react";
import { InfoJson } from "./components/UserInfo";

const TabContainer = styled.div`
    display: grid;
    grid-template-rows: 30px auto;
    height: 350px;
    width: 380px;
    gap: 1px;
`;
const Tabs = styled.div`
    display: flex;
    font-size: 14px;
    gap: 1px;
`;
const Tab = styled.div<{selected:boolean}>`
    background-color: darkgreen;
    padding: 4px;
    font-size: 16px;
    color: white;
    opacity: ${props => props.selected ? 1:0.8 };
    font-weight: ${props => props.selected ? "bold" : "normal" };
    &:hover{
        cursor: pointer;
        opacity: 1;
    }
`;
const TabContents = styled.div`
    background-color: #d2eea8;
    color: #442626;
    padding: 16px 8px;
    font-size: 20px;
    line-height: 1.2;
    ul{
        justify-self: center;
        width: 95%;
        margin-top: 12px;
        padding: 2px;
        border: 2px solid darkgray;
        display: grid;
        grid-template-columns: 1.5fr 3fr;
        gap: 1px;
    }
    li{
        padding: 8px;
        color: #251515;
        background-color: #c0e688;
    }
`;

export default function Resume(){
    const [selectedTab, setTab] = useState(0);

    return(
        <Wrapper>
            <Title>Resume</Title>
            <Img path="deskwork.png" width="150px" height="150px"/>
            <TabContainer>
                <Tabs>
                    {InfoJson.resume.map((info, i: number) => <Tab 
                        onClick={() => setTab(i)} selected={selectedTab === i ? true : false}>
                            {info.title}</Tab>)}
                </Tabs>
                <TabContents>
                    {InfoJson.resume[selectedTab].overview}
                    <ul>
                        <li>Period</li>
                        <li> {InfoJson.resume[selectedTab].period}</li>
                        <li>Key Point</li>
                        <li>{InfoJson.resume[selectedTab].keypoint}</li>
                    </ul>
                </TabContents>
            </TabContainer>
        </Wrapper>
    )
}