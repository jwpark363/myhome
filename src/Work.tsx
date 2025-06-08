import styled from "styled-components";
import { Title, Wrapper } from "./components/StyledComponent";
import { InfoJson } from "./components/UserInfo";

const Jobs = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;
const JobTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: whitesmoke;
`;
const JobDesc = styled.span`
  inline-size: 360px;
  overflow-wrap: break-word;
  margin-top: 8px;
  color: whitesmoke;
`;
const JobItems = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 3fr;
  margin-top: 8px;
  border: 1px white solid;
  width: 360px;
  background-color: white;
  gap: 1px;
  color: lightskyblue;
`;
const JobItem = styled.span`
  background-color: gray;
  padding: 4px;
`;
const JobItemDesc = styled.span`
  background-color: gray;
  padding: 4px;
`;

export default function Work(){
    return(
    <Wrapper>
      <Title>My Work</Title>
      {InfoJson.works.map(work => <Jobs>
        <JobTitle>{work.title}</JobTitle>
        <JobDesc>{work.overview}</JobDesc>
        <JobItems>
          {work.items.map(item => <>
            <JobItem>{item.item}</JobItem>
            <JobItemDesc>{item.desc}</JobItemDesc>
            </>
          )}
        </JobItems>
      </Jobs>)}
    </Wrapper>
    )
}