import styled from "styled-components";

export const Container = styled.div`
  max-width: 1024px;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  padding: 12px;
  gap: 20px;
  height: 80%;
`;
export const Card = styled.div<{bgcolor:string;}>`
  background-color: ${props => props.bgcolor};
  min-width: 420px;
  height: 640px;
`;
export const Title = styled.h1<{color?:string;}>`
    color: ${props => props.color || "white" };
    font-size: 32px;
`;
export const Img = styled.div<{path:string;width:string;height:string;}>`
    width: ${props => props.width};
    height: ${props => props.height};
    background-image: ${props => `url("https://raw.githubusercontent.com/jwpark363/myhome/refs/heads/master/src/assets/${props.path}")`};
    background-size: cover;
`;
export const Avata = styled(Img)`
    border-radius: 50%;
    background-position: center;
`;