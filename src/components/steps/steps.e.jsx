import styled from "styled-components";

export const StepsWrapper = styled.div`
  width: 100%;
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
  @media screen and (max-width: 750px) {
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
  display: flex;
  align-items: center;
  img {
    width: 80%;
    height: 500px;
    object-fit: cover;
    @media screen and (max-width: 750px) {
      height: 450px;
    }
    @media screen and (max-width: 630px) {
      height: auto;
    }
  }
  @media screen and (max-width: 1000px) {
    justify-content: center;
    img {
      width: 100%;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  &:not(:nth-child(2)) {
    margin-top: 48px;
  }
  &:nth-child(2) {
    margin-top: 31px;
  }
  @media screen and (max-width: 1000px) {
    width: 95%;
    &:not(:nth-child(2)) {
      margin-top: 40px;
    }
    &:nth-child(2) {
      margin-top: 25px;
    }
  }
  @media screen and (max-width: 750px) {
    width: 100%;
    &:not(:nth-child(2)) {
      margin-top: 30px;
    }
    &:nth-child(2) {
      margin-top: 18px;
    }
  }
`;
export const CardBody = styled.div`
img{
  width: 47px;
  height: 48px;
}
`;

export const CardFooter = styled.div`
  margin-left: 20px;
  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 124.5%;
    color: #5e6282;
  }
  p {
    margin-top: 4px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 124.5%;
    color: #5e6282;
  }
  @media screen and (max-width: 750px) {
    margin-left: 15px;
    h1 {
      font-size: 14px;
      font-weight: 600;
    }
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 630px) {
    margin-left: 25px;
    h1 {
      font-size: 16px;
      font-weight: 600;
    }
    p {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 360px) {
    margin-left: 20px;
    h1 {
      font-size: 14px;
      font-weight: 600;
    }
    p {
      font-size: 14px;
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
