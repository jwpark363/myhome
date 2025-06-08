import styled from "styled-components";
import { Avata, Title, Wrapper } from "./components/StyledComponent";

const Table = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 360px;
    height: 350px;
    background-color: white;
    margin-top: 32px;
    border-radius: 12px;
    gap: 36px;
    font-size: 18px;
`;
const Row = styled.div`
    display: flex;
    width: 90%;
    border-bottom: 1px solid gray;
`;
const Col = styled.div`
    flex-grow: 1;
    padding-bottom: 12px;
`;

export default function Contact(){
    return(
        <Wrapper>
        <Title>Contact Information</Title>
        <Avata path="profile.png" width="120px" height="120px"/>
        <Table>
            <Row>
                <Col>Name</Col>
                <Col>JW PARK</Col>
            </Row>
            <Row>
                <Col>E-Mail</Col>
                <Col>park363@daum.net</Col>
            </Row>
            <Row>
                <Col>Mobile</Col>
                <Col>010-4576-6690</Col>
            </Row>
        </Table>
        </Wrapper>
    )
}