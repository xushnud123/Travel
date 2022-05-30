import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  padding-bottom: 12.5px;
  position: relative;
  /* background: ${(props) => `url(${props.img})`};
    background-size:100vw 700px contain; */
`;

export const BacVideo = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .vid{
      width: 100%;
      /* height: 100vh; */
      height: 100%;
      object-fit: cover;
    }
`