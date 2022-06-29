import styled from "styled-components";
import ReactCardCarousel from "react-card-carousel";

export const AboutWrapper = styled.div`
  margin-top: 120px;
  width: 100%;
  margin-bottom: 171px;
  @media screen and (max-width: 630px) {
    margin-top: 0px;
    margin-bottom: 271px;
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

export const CardWrapper = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 830px) {
    grid-template-columns: 40% 60%;
    grid-gap: 20px;
  }
  @media screen and (max-width: 630px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardRight = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: middle;
  div {
    /* div {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px ;
      border-radius: 10px;
      box-sizing: border-box;
    } */
  }
  @media screen and (max-width: 630px) {
    margin-top: 140px;
  }
`;

export const ReactCard = styled(ReactCardCarousel)``;

export const Card = styled.div`
  width: 504px;
  height: 245px;
  padding: 10px;
  font-size: 12px;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 0;
  background: #ffffff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  border: 2px solid #f4f1f1;
  overflow: hidden;
  padding: 28px 68px 34px 34px;

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    color: #5e6282;
  }
  .name_wrap {
    margin-top: 31px;
    display: flex;
    align-items: center;
    box-shadow: fff 0px 8px 24px !important;
    .img_person {
      width: 68px;
      height: 68px;
      border-radius: 50%;
      margin-right: 20px;
    }
    .name {
      h1 {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        color: #5e6282;
      }
      h2 {
        margin-top: 5px;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: #5e6282;
      }
    }
    @media screen and (max-width: 830px) {
      margin-top: 25px;
      .img_person {
        width: 60px;
        height: 60px;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    width: 400px;
    padding: 15px;
  }
  @media screen and (max-width: 830px) {
    width: 360px;
    padding: 15px;
    p {
      line-height: 28px;
    }
  }
  @media screen and (max-width: 670px) and (min-width: 630px) {
    width: 340px;
  }
  @media screen and (max-width: 630px) {
    width: 450px;
    padding: 20px;
  }
  @media screen and (max-width: 490px) {
    width: 360px;
    padding: 15px;
  }
    @media screen and (max-width: 390px) {
      width:300px;
      height: auto;
      p{
        font-size: 14px;
        line-height: 25px;
      }
    }
`;

export const Title = styled.div`
  font-family: "Volkhov";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 64px;
  text-transform: capitalize;
  color: #14183e;
  width: 70%;
  @media screen and (max-width: 1000px) {
    width: 100%;
    font-size: 40px;
    line-height: 54px;
  }
  @media screen and (max-width: 750px) {
    font-size: 30px;
    line-height: 44px;
  }
  @media screen and (max-width: 630px) {
    font-size: 35px;
    line-height: 50px;
  }
  @media screen and (max-width: 360px) {
    font-size: 30px;
    line-height: 44px;
  }
`;

export const Description = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #5e6282;
`;
