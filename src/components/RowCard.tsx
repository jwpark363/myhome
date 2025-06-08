import styled from "styled-components"
import type { ReactNode } from "react"

const CardContainer = styled.div`
    height: 700px;
`;

interface IRowProp{
    id: string,
    color: "black" | "blue-grey" | "light-grey" | "dark-grey" |"indigo" | "teal",
    isContainer: boolean,
    isCenter: boolean,
    children: ReactNode
}
export default function RowCard({id, color, isContainer, isCenter, children}:IRowProp){
    return(
        <CardContainer id={id}
            className={`w-half w3-${color} ${isContainer?"w3-container":""} ${isCenter?"w3-center":""}`}>
            {children}
        </CardContainer>
    )
}