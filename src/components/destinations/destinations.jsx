import React from "react";
import {
  TitleWrapper,
  Description,
  Title,
} from "../services-card/services-card.e";
import {
  Destina,
  Row,
  Cards,
  Card,
  CardBody,
  CardFooter,
  NameWrapper,
  Location,
} from "./destinations.e";
import Madina from "../../assets/img/des/adli-wahid-Y9bC2h5V9c8-unsplash.jpg";
import vector from "../../assets/img/des/Vector.svg";
import decore from '../../assets/img/des/Decore.svg'

const Destinations = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  return (
    <Destina>
      <TitleWrapper>
        <Description>Top Selling</Description>
        <Title>Top Destinations</Title>
      </TitleWrapper>
      <Row>
        <Cards {...settings}>
          <div>
            <Card>
              <CardBody>
                <img src={Madina} alt="img not found" />
              </CardBody>
              <CardFooter>
                <NameWrapper>
                  <h1>Madina,BAA</h1>
                  <p>1.2$</p>
                </NameWrapper>
                <Location>
                  <img src={vector} alt="img not found" />
                  <p>10 Days Trip</p>
                </Location>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardBody>
                <img src={Madina} alt="img not found" />
              </CardBody>
              <CardFooter>
                <NameWrapper>
                  <h1>Madina,BAA</h1>
                  <p>1.2$</p>
                </NameWrapper>
                <Location>
                  <img src={vector} alt="img not found" />
                  <p>10 Days Trip</p>
                </Location>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardBody>
                <img src={Madina} alt="img not found" />
              </CardBody>
              <CardFooter>
                <NameWrapper>
                  <h1>Madina,BAA</h1>
                  <p>1.2$</p>
                </NameWrapper>
                <Location>
                  <img src={vector} alt="img not found" />
                  <p>10 Days Trip</p>
                </Location>
              </CardFooter>
              <img src={decore} className="decore"  alt="img nout found" />
            </Card>
          </div>
        </Cards>
      </Row>
    </Destina>
  );
};

export default Destinations;
