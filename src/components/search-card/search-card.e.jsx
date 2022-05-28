import styled,{ keyframes } from "styled-components";

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
  height: 72px;
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
