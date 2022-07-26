import styled from "styled-components";
import img from "../../assets/img/1.jpg";

export const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  padding-bottom: 12.5px;
  position:relative;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url(${img});
  min-height: 100vh;
  @media screen and (max-width:800px) {
    background-size: cover;
    background-position: center;
  }
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
    .img{
      width: 100%;
      /* height: 100vh; */
      height: auto;
      object-fit: cover;
    }
`