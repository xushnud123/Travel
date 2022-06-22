import React, { useEffect } from "react";
import AOS from "aos";
import { Button, Card, Input, Row, SubscribeWrapper, Title } from "./subscribe.e";
import bgImage from '../../assets/img/subscribe/Group 78.svg'
import plus from '../../assets/img/subscribe/Group 5.svg'
import letter from '../../assets/img/subscribe/Group 46.svg'

const Subscribe = () => {
   useEffect(() => {
     AOS.init({
       offset: 200,
       duration: 600,
       easing: "ease-in-sine",
       delay: 100,
     });
   });
  return (
    <SubscribeWrapper data-aos="fade-down-left">
      <Row bgImage={bgImage} plus={plus}>
        <Title>
          Subscribe to get information, latest news and other interesting offers
          about WindTravel
        </Title>
        <Card letter={letter}>
          <Input placeholder="Your email"></Input>
          <Button>Subscribe</Button>
        </Card>
      </Row>
    </SubscribeWrapper>
  );
};

export default Subscribe;
