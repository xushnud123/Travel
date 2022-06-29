import React, { useEffect } from 'react';
import AOS from "aos";
import { Card, CardBody, CardFooter, CardLeft, CardRight, CardWrapper, Description, Row, StepsWrapper, Title } from './steps.e';
import img1 from '../../assets/img/steps/Group 7.svg'
import img2 from "../../assets/img/steps/Group 11.svg";
import img3 from "../../assets/img/steps/Group 12.svg";
import left from '../../assets/img/steps/Image.png'

const Steps = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  });
    return (
      <StepsWrapper>
        <Row>
          <Description>Easy and Fast</Description>
          <CardWrapper>
            <CardLeft data-aos="fade-up-right">
              <Title>Book your next trip in 3 easy steps</Title>
              <Card>
                <CardBody>
                  <img src={img1} alt="img nout found" />
                </CardBody>
                <CardFooter>
                  <h1>Choose Destination</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.{" "}
                  </p>
                </CardFooter>
              </Card>
              <Card>
                <CardBody>
                  <img src={img2} alt="img nout found" />
                </CardBody>
                <CardFooter>
                  <h1>Make Payment</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.{" "}
                  </p>
                </CardFooter>
              </Card>
              <Card>
                <CardBody>
                  <img src={img3} alt="img nout found" />
                </CardBody>
                <CardFooter>
                  <h1>Reach Airport on Selected Date</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.{" "}
                  </p>
                </CardFooter>
              </Card>
            </CardLeft>
            <CardRight data-aos="fade-up-left">
              <img src={left} alt="img nout found" />
            </CardRight>
          </CardWrapper>
        </Row>
      </StepsWrapper>
    );
}
 
export default Steps;