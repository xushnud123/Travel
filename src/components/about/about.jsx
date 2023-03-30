import React, { useEffect } from "react";
import AOS from "aos";
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
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  });
  return (
    <AboutWrapper>
      <Row>
        <Description data-aos='fade-up-right'>Guvohlar</Description>
        <CardWrapper>
          <CardLeft data-aos='fade-up-right'>
            <Title>Odamlar nima deyishadi Biz haqimizda.</Title>
          </CardLeft>
          <CardRight data-aos='fade-up-left'>
            <ReactCard
              autoplay={false}
              autoplay_speed={2500}
              alignment='vertical'>
              <Card>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.”
                </p>
                <div className='name_wrap'>
                  <img src={person} className='img_person' alt='' />
                  <div className='name'>
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
                <div className='name_wrap'>
                  <img src={person} className='img_person' alt='' />
                  <div className='name'>
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
                <div className='name_wrap'>
                  <img src={person} className='img_person' alt='' />
                  <div className='name'>
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
                <div className='name_wrap'>
                  <img src={person} className='img_person' alt='' />
                  <div className='name'>
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
                <div className='name_wrap'>
                  <img src={person} className='img_person' alt='' />
                  <div className='name'>
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
