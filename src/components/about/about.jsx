import React from "react";
import {
  AboutWrapper,
  Card,
  CardLeft,
  CardRight,
  CardWrapper,
  Description,
  ReactCard,
  Row,
  Title,
} from "./about.e";
import person from '../../assets/img/Image.svg'

const About = () => {

  return (
    <AboutWrapper>
      <Row>
        <Description>Easy and Fast</Description>
        <CardWrapper>
          <CardLeft>
            <Title>Book your next trip in 3 easy steps</Title>
          </CardLeft>
          <CardRight>
            <ReactCard
              autoplay={false}
              autoplay_speed={2500}
              alignment="vertical"
            >
              <Card>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.”
                </p>
                <div className="name_wrap">
                  <img src={person} className="img_person" alt="" />
                  <div className="name">
                    <h1>Lei Britz1</h1>
                    <h2>Laguna, Philippines</h2>
                  </div>
                </div>
              </Card>
              <Card>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.”
                </p>
                <div className="name_wrap">
                  <img src={person} className="img_person" alt="" />
                  <div className="name">
                    <h1>Lei Britz1</h1>
                    <h2>Laguna, Philippines</h2>
                  </div>
                </div>
              </Card>
              <Card>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.”
                </p>
                <div className="name_wrap">
                  <img src={person} className="img_person" alt="" />
                  <div className="name">
                    <h1>Lei Britz1</h1>
                    <h2>Laguna, Philippines</h2>
                  </div>
                </div>
              </Card>
              <Card>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.”
                </p>
                <div className="name_wrap">
                  <img src={person} className="img_person" alt="" />
                  <div className="name">
                    <h1>Lei Britz1</h1>
                    <h2>Laguna, Philippines</h2>
                  </div>
                </div>
              </Card>
              <Card>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.”
                </p>
                <div className="name_wrap">
                  <img src={person} className="img_person" alt="" />
                  <div className="name">
                    <h1>Lei Britz1</h1>
                    <h2>Laguna, Philippines</h2>
                  </div>
                </div>
              </Card>
            </ReactCard>
          </CardRight>
        </CardWrapper>
      </Row>
    </AboutWrapper>
  );
};

export default About;
