import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
overflow: hidden;
/* position: ${({open}) => open ? "fixed" :'relative'}; */
`;

export const Row = styled.div`
  margin: 0 61px;
  padding: 10px 0;
  height: 50px;
  display: flex;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.div`
  img {
    width: 235px;
    height: 60px;
    @media screen and (max-width: 1100px) {
      width: 180px;
      height: auto;
    }
    @media screen and (max-width: 850px) {
      width: 150px;
    }
  }
`;

export const Logos = styled.div`
  img {
    display: none;
    @media screen and (max-width: 750px) {
      display: block;
      margin-top: 40px;
      width: 180px;
      margin-bottom: 60px;
    }
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all ease-in-out 0.5s;
  @media screen and (max-width: 750px) {
    position: fixed;
    z-index: 1;
    width: 340px;
    height: 100%;
    top: 0;
    left: ${({ open }) => (open ? "0" : "-100%")};
    transition: all ease-in-out 0.5s;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: ${({ open }) =>
      open ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)" : "0 0 0 0 transparent"};
    backdrop-filter: blur(4.5px);
    -webkit-backdrop-filter: blur(4.5px);
    border-radius: 0 10px 10px 0;
    border: 1px solid rgba(255, 255, 255, 0.18);
    
  }
  @media screen and (max-width:400px){
    width: 100%;
    border-radius: 0;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    list-style: none;
    width: max-content;
    padding: 4px 0;
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
    &:not(:nth-child(5)) {
      position: relative;
      &:after {
        transition: all ease-in-out 0.3s;
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        width: 0;
        height: 4px;
        border-radius: 2px;
        background: #ffffff;
      }
      &:hover {
        &:after{
          width: 50%;
          left: 50%;
        }
      }
    }
  }
  .lang {
    display: flex;
  }
  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: flex-start;
    li {
      margin-left: 0px !important;
      &:not(:nth-child(1)) {
        margin-top: 40px;
      }
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  margin-left: 20px;
  padding: 13px;
  /* box-sizing: border-box; */
  border: 0;
  background-color: transparent;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  overflow: hidden;
  @media screen and (max-width: 1100px) {
    padding: 10px;
    font-size: 18px;
  }
  @media screen and (max-width: 850px) {
    font-size: 16px;
  }
  position: relative;
  &:hover {
    span{

      &:nth-child(odd) {
        width: 50%;
      }
      &:nth-child(even) {
        height: 50%;
      }
    }
  }
  span {
    position: absolute;
    transition: all linear 0.3s;
    &:nth-child(1) {
      top: 0;
      left: 0;
      width: 10px;
      height: 3px;
      background-color: #fff;
    }
    &:nth-child(2) {
      top: 0;
      left: 0;
      width: 3px;
      height: 10px;
      background-color: #fff;
    }
    &:nth-child(3) {
      top: 0;
      right: 0;
      width: 10px;
      height: 3px;
      background-color: #fff;
    }
    &:nth-child(4) {
      top: 0;
      right: 0;
      width: 3px;
      height: 10px;
      background-color: #fff;
    }
    &:nth-child(6) {
      bottom: 0;
      right: 0;
      width: 3px;
      height: 10px;
      background-color: #fff;
    }
    &:nth-child(5) {
      bottom: 0;
      right: 0;
      width: 10px;
      height: 3px;
      background-color: #fff;
    }
    &:nth-child(7) {
      bottom: 0;
      left: 0;
      width: 10px;
      height: 3px;
      background-color: #fff;
    }
    &:nth-child(8) {
      bottom: 0;
      left: 0;
      width: 3px;
      height: 10px;
      background-color: #fff;
    }
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
  width: 40px;
  height: 40px;
  cursor: pointer;
  overflow: hidden;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  display: none;
  .btn {
    width: 35px;
    height: 35px;
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
      transition: all linear 0.5s;
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
  @media screen and (max-width: 750px) {
    display: block;
  }
  @media screen and (max-width: 400px) {
    z-index: 2;
  }
`;

export const Responsive = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`