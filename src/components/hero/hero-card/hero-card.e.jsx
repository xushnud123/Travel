import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 80px;
  overflow: hidden;
  @media screen and (max-width: 700px) {
    margin-top: 40px;
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
    margin: 0 auto;
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
   @media screen and (max-width: 380px) {
     justify-content: center;
   }
`; 

export const Vacation = styled.div`
  width: 35%;
  margin-top: 20px;
  position: relative;
  .plane {
    bottom: -150px;
    right: 100%;
    position: absolute;
    transition: all linear 2s;
  }
  .active {
    right: -60px;
    bottom: -25px;
    @media screen and (max-width: 600px) {
      right: 30%;
      bottom: -50px;
    }
    @media screen and (max-width: 470px) {
      right: -25px;
      bottom: -50px;
    }
    @media screen and (max-width: 380px) {
      right: -25px;
      bottom: -85px;
    }
    @media screen and (max-width: 350px) {
      right: -15px;
      bottom: -55px;
    }
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
@media screen and (max-width:370px) {
      text-align: center; 
      line-height: 40px;
  }
`;
export const Description = styled.div`
  margin-top: 40px;
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    text-transform: uppercase;
    color: #ffffff;
  }
  @media screen and (max-width: 650px) {
    width: calc(100% - 4px);
    margin-top: 34px;
    h1{
      font-size: 24px;
    }
  }
`;

//react-slick

export const ReactSlick = styled.div`
margin-top: 10px;
  width: 600px;
  position: relative;
  .slick-slider {
    height: auto;
    .slick-list {
      height: 100%;  
      .slick-slide {
      }
    }
    .slick-next {
      display: none !important;
      right: 0;
      top: -30px;
    }
    .slick-prev {
      display: none !important;
    }
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    .slick-slider {
      width: 100%;
      .slick-list {
        .slick-slide {
        }
      }
    }
  }
`;

export const Card = styled.div`
  margin: 5px;
  height: max-content;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid #ffffff;
  border-radius: 12px;
  padding: 10px 10px 17.5px 10px;
   @media screen and (max-width: 420px) {
    margin: 0;
    }
`;

export const CardHeader = styled.div`
  img {
    width: 100%;
    height: 154px;
    background: url(jake-irish-R8UzGIwk4TQ-unsplash.jpg);
    border-radius: 10px 10px 4px 4px;
      @media screen and (max-width: 420px) {
        height: 240px;
      }
  }
`;
export const CardBody = styled.div`
margin-top: 10px;
`;

export const Name = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 124.5%;
  letter-spacing: 0.015em;
  color: #023f76;
  @media screen and (max-width: 420px) {
    font-size: 18px;
  }
`;

export const Goings = styled.div`
  margin-top: 3.5px;
  display: flex;
  align-items: center;
  img{
     @media screen and (max-width: 420px) {
       width: 15px;
       height: 15px;
     }
  }
  p {
    margin-left: 10px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 124.5%;
    letter-spacing: -0.02em;
    color: #023f76;
    @media screen and (max-width: 420px) {
      margin-left: 15px;
      font-size: 16px;
    }
  }
`; 

export const Next = styled.div`
  transition: all linear 0.3s;
  &:hover{
    transform: scale(1.2);
  }
`;