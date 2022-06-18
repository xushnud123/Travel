import styled from "styled-components";
import Slider from "react-slick";

export const CompWrapper = styled.div`
  margin-top: 120px;
  width: 100%;

  @media screen and (max-width: 630px) {
    padding-top:30px ;
  }
`;

export const Row = styled.div`
  margin: 0 61px;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
  }
  @media screen and (max-width: 600px) {
    /* width: 100%; */
    width: calc(100% - 40px);
    margin: 0 20px;
  }
`;

export const Title = styled.div`
  font-family: "Volkhov";
  font-style: normal;
  font-weight: 700;
  font-size: 39.7578px;
  line-height: 51px;
  text-transform: capitalize;
  color: #14183e;
  @media screen and (max-width: 600px) {
    font-size: 26px;
    text-align: center;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
`;

export const ReactSlick = styled(Slider)`
  margin-top: 30px;
    button{
        display: none !important;
    }
`;

export const Card = styled.div`
  height: 100px;
  color: #fff;
  margin: 0 60px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }
  .asia {
    width: 100px;
    height: 100px;
  }
   @media screen and (max-width: 800px) {
    margin: 0 30px;
   }
`;
