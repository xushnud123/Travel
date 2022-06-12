import React from "react";
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

const ServicesCard = () => {
  return (
    <Wrapper>
      <TitleWrapper plus={plus}>
        <Description>CATEGORY</Description>
        <Title>We Offer Best Services</Title>
        <div className="plus">
          <img src={plus} alt="img not found" />
        </div>
      </TitleWrapper>
      <Row>
        <CardWrapper>
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
