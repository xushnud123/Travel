import styled, { keyframes } from "styled-components";
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
`;
export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 80% 15%;
  grid-gap: 5%;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 2px solid #ffffff;
  box-shadow: 64.0184px 76.8221px 80px rgba(0, 0, 0, 0.07),
    41.4934px 49.7921px 46.8519px rgba(0, 0, 0, 0.0531481),
    24.659px 29.5907px 25.4815px rgba(0, 0, 0, 0.0425185),
    12.8037px 15.3644px 13px rgba(0, 0, 0, 0.035),
    5.21632px 6.25958px 6.51852px rgba(0, 0, 0, 0.0274815),
    1.18553px 1.42263px 3.14815px rgba(0, 0, 0, 0.0168519);
  border-radius: 12px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 22% 22% 22% 22% ;
  padding: 15px;
  grid-gap: 4%;
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
  img {
    width: 21px;
    height: 21px;
  }
  &:not(:nth-child(1)) {
    border-left: 1px solid #2f4e84;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
`;

export const InputWrapper = styled.div`
  margin-left: 21.5px;
  width: ${({open}) => open ?'100%' : 'max-content'};

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
    height: 30px !important;
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
      .css-6j8wv5-Input{
        input{
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
`;

export const Data = styled(DatePicker)`
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
`;