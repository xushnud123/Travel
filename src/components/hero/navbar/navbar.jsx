import React, { useState } from "react";
import {
  Logo,
  Logos,
  Wrapper,
  Row,
  NavUl,
  Button,
  Selects,
  Toggle,
  NavWrapper,
  Responsive,
} from "./navbar.e";
import logo from "../../../assets/img/logo/logo.svg";

const Navbar = ({ open, setOpen }) => {
  return (
    <Wrapper open={open}>
      <Row>
        <Responsive>
          <Logo>
            <img src={logo} alt='img nout found' />
          </Logo>
          <Toggle>
            <div
              className={open ? "btn active" : "btn"}
              onClick={() => setOpen(!open)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Toggle>
        </Responsive>

        <NavWrapper open={open}>
          <Logos>
            <img src={logo} alt='img nout found' />
          </Logos>
          <NavUl>
            <li>
              <a href='#'>Bosh Sahifa</a>
            </li>
            <li>
              <a href='#'>Sayt Haqida</a>
            </li>
            <li>
              <a href='#'>Premium</a>
            </li>
            <li>
              <a href='#'>Bloglar</a>
            </li>
            <li className='lang'>
              <Selects name='pets' id='pet-select'>
                <option value='' className='opt'>
                  EN
                </option>
                <option value='uzb' className='opt'>
                  UZB
                </option>
                <option value='rus' className='opt'>
                  RUS
                </option>
              </Selects>
              <Button type='button'>
                Band qilish
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </Button>
            </li>
          </NavUl>
        </NavWrapper>
      </Row>
    </Wrapper>
  );
};

export default Navbar;
