import styled from "styled-components";

export const SubscribeWrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  @media screen and (max-width: 800px) {
    margin: 50px 0;
  }
  @media screen and (max-width: 630px) {
    margin-top: 50px 0;
  }
`;

export const Row = styled.div`
  margin: 0 61px;
  height: 407px;
  background-image: url(${({ bgImage }) => `"${bgImage}"`});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
  }
  @media screen and (max-width: 800px) {
    height: 250px;
  }
  @media screen and (max-width: 650px) {
    height: 200px;
    background-size: cover;
  }
  @media screen and (max-width: 600px) {
    margin: 0;
  }
  @media screen and (max-width: 450px) {
    height: 250px;
    background-size: cover;
  }
  @media screen and (max-width: 450px) {
    height: 280px;
  }
  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    right: 30px;
    bottom: -20%;
    width: 153px;
    height: 166px;
    background-image: url(${({ plus }) => `"${plus}"`});
    background-repeat: no-repeat;
    @media screen and (max-width: 800px) {
      right: 0px;
      /* bottom: 0%; */
      width: 100px;
      height: 110px;
      background-size: 100% 100%;
    }
  }
`;

export const Title = styled.div`
  width: 60%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 33px;
  line-height: 54px;
  text-align: center;
  color: #5e6282;
  @media screen and (max-width: 1200px) {
    line-height: 46px;
    width: 80%;
  }
  @media screen and (max-width: 950px) {
    width: 90%;
    font-size: 26px;
    line-height: 36px;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
    font-size: 23px;
    line-height: 30px;
  }
  @media screen and (max-width: 600px) {
    font-size: 17px;
    line-height: 25px;
  }
`;

export const Card = styled.div`
  margin-top: 74px;
  display: flex;
  align-items: center;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    z-index: 5;
    left: 30px;
    bottom: 25px;
    width: 21px;
    height: 18px;
    background-image: url(${({ letter }) => `"${letter}"`});
    background-repeat: no-repeat;
    @media screen and (max-width: 800px) {
      bottom: 16px;
    }
    @media screen and (max-width: 800px) {
      bottom: 10px;
    }
    @media screen and (max-width: 450px) {
      bottom: 86px;
      left: 10px;
    }
  }
  @media screen and (max-width: 800px) {
    margin-top: 40px;
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
    width: 90%;
  }
`;

export const Input = styled.input`
  width: 421px;
  height: 68px;
  background: #ffffff;
  border-radius: 10px;
  padding-left: 66px;
  box-sizing: border-box;
  border: 0;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #39425d;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 800px) {
    width: 350px;
    height: 50px;
  }
  @media screen and (max-width: 600px) {
    width: 260px;
    height: 40px;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 50px;
    padding-left: 40px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  margin-left: 24px;
  width: 180px;
  height: 68px;
  border: 0;
  background: linear-gradient(180deg, #ff946d 0%, #ff7d68 100%);
  border-radius: 10px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  transition: all linear 0.225s;
  &:hover {
    background: linear-gradient(90deg, #f6794b 0%, #fa583f 100%);
  }
  @media screen and (max-width: 800px) {
    width: 140px;
    height: 50px;
  }
  @media screen and (max-width: 600px) {
    width: 110px;
    height: 40px;
    font-size: 15px;
    line-height: 20px;
  }
  @media screen and (max-width: 450px) {
    margin-top: 20px;
    height: 50px;
    width: 100%;
    margin-left: 0;
  }
`;
