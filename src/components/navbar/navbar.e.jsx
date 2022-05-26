import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  /* padding: 0 61px; */
  overflow: hidden;
`;

export const Row = styled.div`
  margin: 0 61px;
  display: flex;
  justify-content: space-between;
  align-items: center;
   @media screen and (max-width: 930px) {
       margin: 0 30px;
   }
`;

export const Logo = styled.div`
  img {
    width: 235px;
    height: 60px;
    @media screen and (max-width:1100px) {
        width: 180px;
        height: auto;
    }
     @media screen and (max-width: 850px) {
         width: 150px;
     }
  }
`;

export const NavWrapper = styled.div`
    
`

export const NavUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    list-style: none;
    a {
      text-decoration: none;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
      color: #ffffff;
    }
    &:not(:nth-child(1)) {
      margin-left: 55px;
    }
    @media screen and (max-width: 1100px) {
      &:not(:nth-child(1)) {
        margin-left: 35px;
      }
      a {
        font-size: 18px;
      }
    }
    @media screen and (max-width: 850px) {
      &:not(:nth-child(1)) {
        margin-left: 30px;
      }
      a {
        font-size: 16px;
      }
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  margin-left: 20px;
  padding: 13px;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  background-color: transparent;
  border-radius: 12px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
   @media screen and (max-width: 1100px) {
       padding: 10px;
       font-size: 18px;
   }
    @media screen and (max-width: 850px) {
        font-size: 16px;
    }
`;

export const Selects = styled.select`
  border: 0;
  background: transparent;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  color: rgba(33, 40, 50, 0.59);
  &:focus-visible {
    outline: none;
  }
  .opt {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 20px;
    color: rgba(33, 40, 50, 0.59);
  }
`;

export const Toggle = styled.div`
display: none;
  width: 35px;
  height: 35px;
  cursor: pointer;
  .btn {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      position: absolute;
      width: 35px;
      height: 4px;
      background-color: #fff;
      border-radius: 2px;
      opacity: 1;
      transition: all linear 0.3s;
      &:nth-child(1) {
        transform: translateY(-10px);
        width: 25px;
        left: 0px;
      }
      &:nth-child(2) {
        transform: translateY(10px);
        width: 20px;
        left: 0px;
      }
    }
  }
  .active {
    span {
      &:nth-child(1) {
        transform: translateY(0px) rotate(45deg);
        width: 35px;
        transition-delay: 0.125ms;
      }
      &:nth-child(3) {
        transform: translateX(60px);
        opacity: 0;
      }
      &:nth-child(2) {
        transform: translateY(0px) rotate(-45deg);
        width: 35px;
      }
    }
  }
`;
