import styled from "styled-components";
import { Avata, Title, Wrapper } from "./components/StyledComponent";

const Table = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 360px;
    height: 350px;
    background-color: #adcfad;
    margin-top: 32px;
    border-radius: 12px;
    gap: 36px;
    font-size: 16px;
`;
const Row = styled.div`
    display: flex;
    width: 90%;
    border-bottom: 1px solid gray;
`;
const Col = styled.div`
    flex-grow: 1;
    padding: 0px 12px 2px 2px;
    display: flex;
    align-items: center;
`;


export default function Portfolio(){
    return(
        <Wrapper>
        <Title>My Portfolio</Title>
        <Table>
            <Row>
                <Col><a href="https://jwpark363.github.io/top30coins/" target="_blank">
                    <Avata path="portfolio01.png" width="70px" height="70px"/>
                </a></Col>
                <Col>Top30Coins</Col>
                <Col>React + Coin Paprika + Apexchart</Col>
            </Row>
            <Row>
            <Col><a href="https://jwpark363.github.io/modern_todo/" target="_blank">
                <Avata path="portfolio03.png" width="70px" height="70px"/>
            </a></Col>
                <Col>Todo App.</Col>
                <Col>React + Jotai</Col>
            </Row>
            <Row>
            <Col><a href="https://jwpark363.github.io/disegame/" target="_blank">
                <Avata path="portfolio02.png" width="70px" height="70px"/>
            </a></Col>
                <Col>Dise Game.</Col>
                <Col>React + Animation</Col>
            </Row>
        </Table>
        </Wrapper>
    )
}