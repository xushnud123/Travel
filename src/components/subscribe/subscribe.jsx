import React from "react";
import { Button, Card, Input, Row, SubscribeWrapper, Title } from "./subscribe.e";
import bgImage from '../../assets/img/subscribe/Group 78.svg'
import plus from '../../assets/img/subscribe/Group 5.svg'
import letter from '../../assets/img/subscribe/Group 46.svg'

const Subscribe = () => {
  return (
    <SubscribeWrapper>
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
