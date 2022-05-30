import styled from "styled-components";
import Select from "react-select";
import DatePicker from "react-datepicker";

export const Wrapper = styled.div`
  margin-top: 36px;
  padding: 20px 36px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 64.0184px 76.8221px 80px rgba(0, 0, 0, 0.07),
    41.4934px 49.7921px 46.8519px rgba(0, 0, 0, 0.0531481),
    24.659px 29.5907px 25.4815px rgba(0, 0, 0, 0.0425185),
    12.8037px 15.3644px 13px rgba(0, 0, 0, 0.035),
    5.21632px 6.25958px 6.51852px rgba(0, 0, 0, 0.0274815),
    1.18553px 1.42263px 3.14815px rgba(0, 0, 0, 0.0168519);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    padding: 15px 20px;
  }
  @media screen and (max-width: 930px) {
    padding: 10px 10px;
  }
`;
export const Row = styled.div`
  width: 100%;
  /* display: grid;
  grid-template-columns: 83% 15%;
  grid-gap: 2%; */
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 19%);
  grid-gap: calc(5% / 4);
  @media screen and (max-width: 1235px) {
    grid-template-columns: 24% repeat(4, calc(73% / 4));
    grid-gap: calc(3% / 4);
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 40% repeat(2, calc(55% / 2));
    grid-gap: calc(5% / 2);
    grid-row-gap: 20px;
  }
  @media screen and (max-width: 530px) {
    grid-template-columns: repeat(6, calc((80%) / 6));
    /* grid-gap: 20px; */
    grid-column-gap: calc(20% / 5);
    grid-row-gap: 20px;
  }
  @media screen and (max-width: 460px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  @media screen and (max-width:350px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  /* @media screen and (max-width: 1100px) {
    grid-template-columns: 32% repeat(3, calc(68% / 3));
  } */
`;

export const SearchBtn = styled.button`
  height: 100%;
  width: 100%;
  background: #e7ac72;
  border: 0;
  border-radius: 12px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffffff;
  position: relative;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 10px 5px 10px;
  background: #ffffff;
  box-shadow: 64.0184px 76.8221px 80px rgba(0, 0, 0, 0.07),
    41.4934px 49.7921px 46.8519px rgba(0, 0, 0, 0.0531481),
    24.659px 29.5907px 25.4815px rgba(0, 0, 0, 0.0425185),
    12.8037px 15.3644px 13px rgba(0, 0, 0, 0.035),
    5.21632px 6.25958px 6.51852px rgba(0, 0, 0, 0.0274815),
    1.18553px 1.42263px 3.14815px rgba(0, 0, 0, 0.0168519);
  border-radius: 12px;
  box-sizing: border-box;
  img {
    width: 25px;
    height: 25px;
    @media screen and (max-width: 930px) {
      width: 20px;
      height: 20px;
    }
  }
  &:nth-child(5) {
    background: transparent;
    padding: 0;
    box-shadow: none;
    border: 0;
  }
  @media screen and (max-width: 800px) and (min-width: 530px) {
    &:nth-child(5) {
      grid-column: 2 / 4;
    }
  }
  @media screen and (max-width: 530px) and (min-width: 460px) {
    height: 54px;
    &:nth-child(1) {
      grid-column: 1 / 4;
    }
    &:nth-child(2) {
      grid-column: 4 / 7;
    }
    &:nth-child(3) {
      grid-column: 1 / 4;
    }
    &:nth-child(4) {
      grid-column: 4 / 7;
    }
    &:nth-child(5) {
      grid-column: 1 / 7;
    }
  }
  @media screen and (max-width: 460px) {
    width: 100%;
    height: 54px;
    &:nth-child(1) {
      grid-column: 1 / 3;
    }
    &:nth-child(2) {
      grid-column: 1 / 2;
    }
    &:nth-child(3) {
      grid-column: 2 / 3;
    }
    &:nth-child(4) {
      grid-column: 1 / 3;
    }
    &:nth-child(5) {
      grid-column: 1 / 3;
    }
  }
  @media screen and (max-width: 350px) {
    width: 100%;
    height: 54px;
   grid-column: 1 / 3 !important;
  }
`;

export const InputWrapper = styled.div`
  margin-left: 21.5px;
  width: ${({ open }) => (open ? "100%" : "max-content")};

  p {
    margin-left: 5px;
    margin-bottom: 2px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #3e4958;
  }
  @media screen and (max-width: 1150px) {
    margin-left: 10px;
  }
  @media screen and (max-width: 350px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const Selects = styled(Select)`
  height: 100%;
  width: 100%;
  border: 0 !important;
  &:focus-visible {
    outline: none;
  }
  .css-1s2u09g-control {
    border: 0;
    height: 30px;
    .css-319lph-ValueContainer {
      padding: 0;
      height: 100%;
      min-height: 30px;
      .css-qc6sy-singleValue {
        height: 100%;
        margin: 0 0 0 5px;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        align-items: center;
        color: #3e4958;
        mix-blend-mode: normal;
      }
    }

    .css-1hb7zxy-IndicatorsContainer {
      /* transform: translateY(-13px); */
      span {
        background: transparent;
      }
    }
  }
  .css-1pahdxg-control {
    border: 0;
    box-shadow: 0;
    background-color: #e9ecef;
    .css-319lph-ValueContainer {
      padding: 0;
      height: 100%;
      min-height: 38px;
      .css-qc6sy-singleValue {
        height: 100%;
        margin: 0 0 0 5px;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        align-items: center;
        color: #3e4958;
        mix-blend-mode: normal;
      }
      .css-6j8wv5-Input {
        input {
          margin-left: 4px;
        }
      }
    }
    .css-1hb7zxy-IndicatorsContainer {
      /* transform: translateY(-13px); */
      span {
        background: transparent;
      }
    }
  }
  @media screen and (max-width: 1150px) {
    .css-1s2u09g-control {
      min-height: 30px;
      height: 30px;
      position: relative;
      .css-319lph-ValueContainer {
        position: absolute;
        .css-qc6sy-singleValue {
          height: 30px;
          font-size: 16px;
        }
      }
      .css-1hb7zxy-IndicatorsContainer {
        position: absolute;
        right: 0;
        height: 30px;
      }
    }
    .css-1pahdxg-control {
      min-height: 30px;
      height: 30px;
      position: relative;
      .css-319lph-ValueContainer {
        height: 30px;
        min-height: 30px;
        position: absolute;
        .css-qc6sy-singleValue {
          height: 30px;
          font-size: 16px;
        }
      }
      .css-1hb7zxy-IndicatorsContainer {
        position: absolute;
        right: 0;
        height: 30px;
      }
    }
  }
  @media screen and (max-width: 930px) {
    .css-1s2u09g-control {
      min-height: 25px;
      height: 25px;
      position: relative;
      .css-319lph-ValueContainer {
        position: absolute;
        .css-qc6sy-singleValue {
          height: 25px;
          font-size: 13px;
        }
      }
      .css-1hb7zxy-IndicatorsContainer {
        position: absolute;
        right: 0;
        height: 25px;
      }
    }
    .css-1pahdxg-control {
      min-height: 25px;
      height: 25px;
      position: relative;
      .css-319lph-ValueContainer {
        height: 25px;
        min-height: 25px;
        position: absolute;
        .css-qc6sy-singleValue {
          height: 25px;
          font-size: 13px;
        }
      }
      .css-1hb7zxy-IndicatorsContainer {
        position: absolute;
        right: 0;
        height: 25px;
      }
    }
  }
`;

export const Data = styled(DatePicker)`
  height: 25px;
  width: 100px;
  padding-left: 5px;
  border: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #3e4958;
  mix-blend-mode: normal;
  &:focus-visible {
    outline: none;
  }
  @media screen and (max-width: 1150px){
    width: 70px;
  }
  @media screen and (max-width: 350px) {
    width: 100%; 
    max-width: 100%;
  }
`;
