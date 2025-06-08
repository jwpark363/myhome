import styled from "styled-components";
import { Img, Title, Wrapper } from "./components/StyledComponent";

const Pictures = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 360px;
    gap: 2px;
`;
const Picture = styled(Img)`
    background-position: center;
`

export default function Park(){
    return(
        <Wrapper>
        <Title>Park In Songdo, Incheon</Title>
        <Pictures>
            <Picture path="cartoon-songdo01.png" width="180px" height="180px"/>
            <Picture path="cartoon-songdo02.png" width="180px" height="180px"/>
            <Picture path="cartoon-songdo03.png" width="180px" height="180px"/>
            <Picture path="cartoon-songdo04.png" width="180px" height="180px"/>
            <Picture path="cartoon-songdo05.png" width="180px" height="180px"/>
            <Picture path="cartoon-songdo06.png" width="180px" height="180px"/>
        </Pictures>
        </Wrapper>
    )
}