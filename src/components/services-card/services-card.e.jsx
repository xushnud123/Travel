import styled,{keyframes} from "styled-components";
import plus from "../../assets/img/service-card/Group 4.svg";

export const Wrapper = styled.div``;
export const TitleWrapper = styled.div`
  position: relative;
 .plus {
    position: absolute;
    top: 0;
    right: 0;
    width: 153px;
    height: 166px;
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
`;

export const Row = styled.div`
margin: 0 100px;
padding-bottom:106px ;
`;

export const CardWrapper = styled.div`
width: 100%;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 50px;
`

export const Card = styled.div`
  /* width: 267px; */
  height: 314px;
  background: #ffffff;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
    0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
    0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
    0px 20px 13px rgba(0, 0, 0, 0.01),
    0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
    0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
  border-radius: 36px;
  padding: 40px 32px;
  box-sizing: border-box;
  &:hover {
    .img1 {
      transform: scale(1.2);
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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