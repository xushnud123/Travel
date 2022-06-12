import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardFooter,
  CardWrapper,
  Description,
  Row,
  Title,
  TitleWrapper,
  Wrapper,
} from "./services-card.e";
import plus from "../../assets/img/service-card/Group 4.svg";
import antena from '../../assets/img/service-card/Group 48.svg'
import plane from '../../assets/img/service-card/Group 51 (1).svg'
import mikrofon from "../../assets/img/service-card/Group 50.svg";
import settings from '../../assets/img/service-card/Group 49.svg'
import images from '../../assets/img/service-card/Rectangle 157.svg'

const ServicesCard = () => {
   const [width, setWidth] = useState(0);
   const carousel = useRef();

   useEffect(() => {
     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
   }, []);
  return (
    <Wrapper>
      <TitleWrapper plus={plus}>
        <Description>CATEGORY</Description>
        <Title>We Offer Best Services</Title>
        <div className="plus">
          <img src={plus} alt="img not found" />
        </div>
      </TitleWrapper>
      <Row
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <CardWrapper drag="x" dragConstraints={{ right: 0, left: -width }}>
          <Card>
            <CardBody>
              <img src={antena} className="img1" alt="img not found" />
            </CardBody>
            <CardFooter>
              <h1>Calculated Weather</h1>
              <p>
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
            </CardFooter>
          </Card>
          <Card>
            <CardBody>
              <img src={plane} className="img1" alt="img not found" />
            </CardBody>
            <CardFooter>
              <h1>Calculated Weather</h1>
              <p>
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
            </CardFooter>
            <img src={images} className="img_2" alt="img not found" />
          </Card>
          <Card>
            <CardBody>
              <img src={mikrofon} className="img1" alt="img not found" />
            </CardBody>
            <CardFooter>
              <h1>Calculated Weather</h1>
              <p>
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
            </CardFooter>
          </Card>
          <Card>
            <CardBody>
              <img src={settings} className="img1" alt="img not found" />
            </CardBody>
            <CardFooter>
              <h1>Calculated Weather</h1>
              <p>
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
            </CardFooter>
          </Card>
        </CardWrapper>
      </Row>
    </Wrapper>
  );
};

export default ServicesCard;
