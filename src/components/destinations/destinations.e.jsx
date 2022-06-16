import styled from "styled-components";
import Slider from "react-slick";

export const Destina = styled.div`
  width: 100%;
  margin-top: 100px;
`;

export const Row = styled.div`
  padding-bottom: 106px;
  margin: 0 80px;
  @media screen and (max-width: 1200px) {
    margin: 0 0px;
  }
`;

export const Cards = styled(Slider)`
  width: 100%;
  grid-gap: 25px;
  /* .slick-slider { */
  button {
    z-index: 1;
  }
  .slick-next {
    right: 25px;
  }
  .slick-prev {
    left: 25px;
  }
  .slick-slide {
    padding-bottom: 25px;
  }
`;

export const Card = styled.div`
  justify-self: center;
  width: 314px;
  height: 420px;
  margin: 0 auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 24px;
  transition: all linear 0.225s;
  position: relative;
  z-index: 1;
  &:hover {
    box-shadow: rgba(149, 157, 165, 0.6) 0px 8px 24px;
  }
  .decore {
    right: -45px;
    z-index: -3;
    top: 20%;
    position: absolute;
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
  @media screen and (max-width: 1100px) {
    width: 280px;
  }
  @media screen and (max-width: 950px) {
    height: 350px;
    width: 250px;
  }
  @media screen and (max-width: 950px) {
    height: 350px;
    width: 90%;
  }
`;

export const CardBody = styled.div`
  height: 70%;
  img {
    border-radius: 24px 24px 0 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardFooter = styled.div`
  background-color: #fff;
  padding: 27px 42px 0 20px;
  height: 30%;
  box-sizing: border-box;
  border-radius: 0 0 24px 24px;
`;

export const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 124.5%;
    color: #5e6282;
    display: inline;
  }
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 124.5%;
    color: #5e6282;
  }
`;
export const Location = styled.div`
  display: flex;
  margin-top: 20px;
  img {
    width: 17px;
    height: 17px;
    margin-right: 15px;
  }
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 124.5%;
    color: #5e6282;
  }
`;
