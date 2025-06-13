import styled from "styled-components";
import { Avata, Img, Title, Wrapper } from "./components/StyledComponent";

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
                    <Img path="cartoon-songdo01.png" width="60px" height="60px"/>
                </a></Col>
                <Col>Top30Coins</Col>
                <Col>React + Coin Paprika + Apexchart</Col>
            </Row>
            <Row>
            <Col><Img path="cartoon-songdo01.png" width="60px" height="60px"/>
            </Col>
                <Col>Dise Game.</Col>
                <Col>React + Animation(working)</Col>
            </Row>
        </Table>
        </Wrapper>
    )
}