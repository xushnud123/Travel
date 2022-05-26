import React, { useState } from "react";
import { Logo,Logos, Wrapper, Row, NavUl, Button, Selects, Toggle, NavWrapper, Responsive } from "./navbar.e";
import logo from "../../assets/img/logo/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <Row>
        <Responsive>
        <Logo>
          <img src={logo} alt="img nout found" />
        </Logo>
        <Toggle>
          <div
            className={open ? "btn active" : "btn"}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Toggle>
        </Responsive>

        <NavWrapper open={open}>
          <Logos>
            <img src={logo} alt="img nout found" />
          </Logos>
          <NavUl>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Premium</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li className="lang">
              <Selects name="pets" id="pet-select">
                <option value="" className="opt">
                  EN
                </option>
                <option value="uzb" className="opt">
                  UZB
                </option>
                <option value="rus" className="opt">
                  RUS
                </option>
              </Selects>
              <Button type="button">Book Now</Button>
            </li>
          </NavUl>
        </NavWrapper>
      </Row>
    </Wrapper>
  );
};

export default Navbar;
