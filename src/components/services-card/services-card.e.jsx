import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
 overflow: hidden;
`;
export const TitleWrapper = styled.div`
  position: relative;
 .plus {
  z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    width: 153px;
    height: 166px;
    @media screen and (max-width: 930px) {
      width: 90px;
      height: auto;
    }
  }
`;

export const Description = styled.p`
  margin-top: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #5e6282;
`;

export const Title = styled.h1`
  margin-top: 10px;
  font-family: "Volkhov";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 64px;
  text-align: center;
  text-transform: capitalize;
  color: #14183e;
  margin-bottom: 68px;
  @media screen and (max-width: 930px) {
    font-size: 35px;
    line-height: 44px;
    margin-bottom: 45px;
  }
`;

export const Row = styled(motion.div)`
  margin: 0 61px;
  cursor: grab;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
  }
  @media screen and (max-width: 600px) {
    /* width: 100%; */
    width: calc(100% - 40px);
    margin: 0 20px;
  }
`;

export const CardWrapper = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;
  padding: 40px 0;
  ::-webkit-scrollbar {
    height: 5px;
    background-color: #e9ecef;
    border-radius: 2.5px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 2.5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #fca311;
    border-radius: 2.5px;
  }

  @media screen and (max-width: 1250px) {
    grid-gap: 30px;
  }
  @media screen and (max-width: 1000px) {
    padding: 30px 0;
    overflow-y: hidden;
    display: flex;
  }
  @media screen and (max-width: 400px) {
    grid-gap: 0;
  }
`;

export const Card = styled(motion.div)`
  /* width: 267px; */
  height: 314px;
  background: #ffffff;
  border-radius: 36px;
  padding: 40px 32px;
  box-sizing: border-box;
  transition: all linear 0.225s;
  border: 1px solid #faa307;
  pointer-events: none;
  &:hover {
    .img1 {
      transform: scale(1.2);
    }
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
      0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
      0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
      0px 20px 13px rgba(0, 0, 0, 0.01),
      0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
      0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  &:nth-child(2) {
    .img_2 {
      position: absolute;
      z-index: -1;
      left: -35px;
      bottom: -35px;
      width: 100px;
      height: 100px;
    }
  }
  @media screen and (max-width: 1250px) {
    padding: 30px 15px;
  }
  @media screen and (max-width: 1000px) {
    min-width: 267px;
    &:nth-child(2) {
      .img_2 {
        position: absolute;
        z-index: -1;
        left: -12px;
        bottom: -20px;
        width: 100px;
        height: 100px;
      }
    }
  }
  @media screen and (max-width: 400px) {
    margin: 0 15px;
  }
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  .img1{
    transition: all linear .2s;
  }
`;


export const CardFooter = styled.div`
  h1 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    color: #1e1d4c;
  }
  p {
    margin-top: 15px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #5e6282;
  }
`;