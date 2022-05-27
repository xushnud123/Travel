import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 110px;
  @media screen and (max-width: 700px) {
    margin-top: 50px;
  }
`;

export const Row = styled.div`
  margin: 0 61px;
  @media screen and (max-width: 930px) {
    margin: 0 30px;
  }
  @media screen and (max-width: 600px) {
    /* width: 100%; */
    width: calc(100% - 60px);
  }
`;

export const HeroTitle = styled.div`
    
`
export const Landscape = styled.div`
  display: flex;
  align-items: center;
  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: #ffffff;
  }
  span {
    margin: 0 10px;
    width: 2px;
    height: 10px;
    background: #ffffff;
    @media screen and (max-width: 700px) {
      margin: 0 8px;
    }
  }
`; 

export const Vacation = styled.div`
  width: 35%;
  margin-top: 20px;
  position: relative;
  .plane {
    display: none;
    bottom: -150px;
    right: 100%;
    position: absolute;
    transition: all linear 2s;
  }
  .active {
    right: -60px;
    bottom: -25px;
  }
  @media screen and (max-width: 1200px) {
    width: 50%;
  }

  @media screen and (max-width: 930px) {
    width: 60%;
  }
  @media screen and (max-width: 700px) {
    width: 70%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  width: 100%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 47px;
  line-height: 57px;
  color: #ffffff;
  @media screen and (max-width: 700px) {
    font-size: 35px;
    line-height: 47px;
}
@media screen and (max-width:350px) {
      text-align: center; 
  }
`;
export const Description = styled.div``;

//react-slick

export const ReactSlick = styled.div`
  width: 560px;
  .slick-slider {
    margin: 0 -35px;
    height: 260px;
    .slick-list {
        height: 100%;
        .slick-slide {
          margin-top: 15px;
        margin-right: 15px;
        margin-left: 15px;
        width: 176px !important;
        height: 230px !important;
        background: rgba(255, 255, 255, 0.8);
        border: 2px solid #ffffff;
        /* shadow */

        /* box-shadow: 64.0184px 76.8221px 80px rgba(0, 0, 0, 0.07),
          41.4934px 49.7921px 46.8519px rgba(0, 0, 0, 0.0531481),
          24.659px 29.5907px 25.4815px rgba(0, 0, 0, 0.0425185),
          12.8037px 15.3644px 13px rgba(0, 0, 0, 0.035),
          5.21632px 6.25958px 6.51852px rgba(0, 0, 0, 0.0274815),
          1.18553px 1.42263px 3.14815px rgba(0, 0, 0, 0.0168519); */
          box-shadow: 5px 10px 20px #000;
        border-radius: 12px;
      }
    }
  }
`;
