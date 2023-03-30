import React from 'react'
import { Application, Card, CardLi, CardLogo, CardSocial, CardUl, CardWrapper, FooterWrapper, Icon, Row, SocialNetwork } from './footer.e';
import { ImFacebook } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { GrTwitter } from "react-icons/gr";
import logo from '../../assets/img/footer/Group 592.svg'
import google from '../../assets/img/footer/Google Play.svg'
import apple from '../../assets/img/footer/Play Store.svg'

const Footer = () => {
    return (
      <FooterWrapper>
        <Row>
          <CardWrapper>
            <Card>
              <CardLogo>
                <img src={logo} alt='img nout found' />
                <p>
                  Book your trip in minute, get full Control for much longer.
                </p>
              </CardLogo>
            </Card>
            <Card>
              <CardUl>
                <CardLi>Company</CardLi>
                <CardLi>About</CardLi>
                <CardLi>Careers</CardLi>
                <CardLi>Mobile</CardLi>
              </CardUl>
            </Card>
            <Card>
              <CardUl>
                <CardLi>Contact</CardLi>
                <CardLi>Help/FAQ</CardLi>
                <CardLi>Press</CardLi>
                <CardLi>Affilates</CardLi>
              </CardUl>
            </Card>
            <Card>
              <CardUl>
                <CardLi>More</CardLi>
                <CardLi>Airlinefees</CardLi>
                <CardLi>Airline</CardLi>
                <CardLi>Low fare tips</CardLi>
              </CardUl>
            </Card>
            <Card>
              <CardSocial>
                <SocialNetwork>
                  <Icon>
                    <ImFacebook />
                  </Icon>
                  <Icon>
                    <FiInstagram />
                  </Icon>
                  <Icon>
                    <GrTwitter />
                  </Icon>
                </SocialNetwork>
                <p>Discover our app</p>
                <Application>
                  <img src={google} alt='img nout found' />
                  <img src={apple} alt='img nout found' />
                </Application>
              </CardSocial>
            </Card>
          </CardWrapper>
          <h1>Dizayner Raimov Xushnudbek 2023-yil</h1>
        </Row>
      </FooterWrapper>
    );
}

export default Footer;