import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 120px;
  width: 100%;

  @media screen and (max-width: 630px) {
    padding-top: 30px;
  }
`;

export const Row = styled.div`
  margin: 0 100px;
  @media screen and (max-width: 1300px) {
    margin: 0 61px;
  }
  @media screen and (max-width: 960px) {
    margin: 0 30px;
  }
  @media screen and (max-width: 600px) {
    width: calc(100% - 40px);
    margin: 0 20px;
  }
  h1{
    margin-top: 60px;
    margin-bottom: 6px;
    display: block;
    text-align: center;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 124.5%;
    color: #5e6282;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% repeat(3, calc(50% / 3)) 20%;
  /* grid-gap: 20px; */
  @media screen and (max-width: 1300px) {
    grid-template-columns: 25% repeat(3, calc(45% / 3)) 25%;
    grid-gap: calc(5% / 4);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 27% repeat(3, calc(43% / 3)) 25%;
    grid-gap: calc(5% / 4);
  }
  @media screen and (max-width: 780px) {
    grid-template-columns: repeat(6, calc(90% / 6));
    grid-column-gap: calc(10% / 4);
    grid-row-gap: 30px;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
  }
`;

export const Card = styled.div`
  @media screen and (max-width: 780px) and (min-width: 400px) {
    &:nth-child(1) {
      grid-column: 1 / 4;
    }
    &:nth-child(2) {
      grid-row: 2 / 3;
      grid-column: 1 / 3;
    }
    &:nth-child(3) {
      grid-row: 2 / 3;
      grid-column: 3 / 5;
    }
    &:nth-child(4) {
      grid-row: 2 / 3;
      grid-column: 5 / 7;
    }
    &:nth-child(5) {
      grid-column: 4 / 7;
      grid-row: 1 / 2;
    }
  }
  @media screen and (max-width: 400px) {
    &:nth-child(5) {
      grid-column: 1 / 3;
    }
  }
`;

export const CardLogo = styled.div`
  width: 100%;
  img {
    width: 235px;
    height: 60px;
    max-width: 235px;
    @media screen and (max-width: 1200px) {
        width: 100%;
        height: auto;
    }
    @media screen and (max-width: 900px) {
        width: 90%;
    }
  }
  p {
    margin-top: 5px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 124.5%;
    color: #5e6282;
    width: 80%;
     @media screen and (max-width: 900px) {
        width: 100%;
     }
  }
`;

export const CardUl = styled.ul``;

export const CardLi = styled.li`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 124.5%;
  color: #080809;
  list-style: none;
  &:not(:nth-child(1)) {
    margin-top: 12px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 124.5%;
    color: #5e6282;
    cursor: pointer;
  }
  &:nth-child(2) {
    margin-top: 24px;
  }
  @media screen and (max-width: 900px) {
    font-size: 18px;
     &:not(:nth-child(1)) {
        font-size: 15px;
     }
     &:nth-child(2) {
        margin-top: 16px;
     }
  }
`;

export const CardSocial = styled.div`
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 124.5%;
    letter-spacing: 0.005em;
    color: #5e6282;
     @media screen and (max-width: 900px) {
        font-size: 18px;
     }
  }
`;

export const SocialNetwork = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  @media screen and (max-width: 900px) {
    margin-bottom: 16px;
  }
  @media screen and (max-width: 780px) {
    width: 50%;
  }
  @media screen and (max-width: 540px) {
    width: 80%;
  }
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(1) {
    transition: all linear 0.225s;
    svg {
      font-size: 18px;
      color: #3b5998;
      transition: all linear 0.225s;
    }
    &:hover {
      background-color: #3b5998;
      svg {
        color: #ffffff;
      }
    }
  }
  &:nth-child(2) {
    transition: all linear 0.225s;
    svg {
      font-size: 18px;
      stroke: #cc2366;
      transition: all linear 0.225s;
    }
    &:hover {
      background: -webkit-linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      );
      svg {
        stroke: #ffffff;
      }
    }
  }
  &:nth-child(3) {
    transition: all linear 0.225s;
    svg {
      font-size: 18px;
      color: #00acee;
      transition: all linear 0.225s;
    }
    &:hover {
      background-color: #00acee;
      svg {
        color: #ffffff;
      }
    }
  }
   @media screen and (max-width: 900px) {
    width: 40px;
    height: 40px;
   }
`;

export const Application = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 10px));
  grid-gap: 10px;
  img {
    width: 107px;
    height: 35px;
    cursor: pointer;
    transition: all linear 0.225s;
    @media screen and (max-width: 900px) {
      width: 100%;
    }
    @media screen and (max-width: 780px) {
      width: 107px;
      height: 35px;
    }
    @media screen and (max-width: 540px) {
      width: 100%;
      height: auto;
    }
  }
`;

