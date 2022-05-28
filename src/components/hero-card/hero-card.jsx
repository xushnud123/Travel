import React, { useRef, useState } from "react";
import Slider from "react-slick";
import {
  Card,
  CardBody,
  CardHeader,
  Description,
  Goings,
  HeroTitle,
  Landscape,
  Name,
  Next,
  ReactSlick,
  Row,
  Title,
  Vacation,
  Wrapper,
} from "./hero-card.e";
import plane from '../../assets/img/hero/plane.svg'
import next from '../../assets/img/icon/icon.svg'
import frame from '../../assets/img/icon/Frame.svg'
import nature1 from '../../assets/img/hero-slick/unsplash_GNdp2Q4VZjw.png'
import nature3 from "../../assets/img/hero-slick/unsplash_MdTtpxGlrz8.png";
import nature2 from "../../assets/img/hero-slick/unsplash_rC2_aH8lAlU.png";
import SearchCard from "../search-card/search-card";


const HeroCard = () => {
    const [open,setOpen] = useState(false)

    const handlePlane = () => {
        setOpen(true);
    }
    setTimeout(handlePlane,500)

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const sliderRef = useRef(null)

   const gotoNext = () => {
      sliderRef.current.slickNext();
    };

  return (
    <Wrapper>
      <Row>
        <HeroTitle>
          <Landscape>
            <p>Mountains</p>
            <span></span>
            <p>Plains</p>
            <span></span>
            <p>Beaches</p>
          </Landscape>
          <Vacation>
            <Title>Spend your vacation with our activites</Title>
            <img
              src={plane}
              className={open ? "plane active" : "plane"}
              alt="img nout found"
            />
          </Vacation>
        </HeroTitle>
        <div>
          <Description>
            <h1>Most Popular </h1>
            <Next className="next" onClick={() => gotoNext()}>
              <img src={next} alt="img nout found" />
            </Next>
          </Description>
        </div>
        <ReactSlick>
          <Slider ref={sliderRef} {...settings}>
            <div>
              <Card>
                <CardHeader>
                  <img src={nature2} alt="img nout found" />
                </CardHeader>
                <CardBody>
                  <Name>Trip To Palawan</Name>
                  <Goings>
                    <img src={frame} alt="img nout found" />
                    <p>31 people going</p>
                  </Goings>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <img src={nature1} alt="img nout found" />
                </CardHeader>
                <CardBody>
                  <Name>Trip To Baguio</Name>
                  <Goings>
                    <img src={frame} alt="img nout found" />
                    <p>27 people going</p>
                  </Goings>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <img src={nature3} alt="img nout found" />
                </CardHeader>
                <CardBody>
                  <Name>Trip To Boracay</Name>
                  <Goings>
                    <img src={frame} alt="img nout found" />
                    <p>20 people going</p>
                  </Goings>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <img src={nature2} alt="img nout found" />
                </CardHeader>
                <CardBody>
                  <Name>Trip To Palawan</Name>
                  <Goings>
                    <img src={frame} alt="img nout found" />
                    <p>31 people going</p>
                  </Goings>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <img src={nature1} alt="img nout found" />
                </CardHeader>
                <CardBody>
                  <Name>Trip To Palawan</Name>
                  <Goings>
                    <img src={frame} alt="img nout found" />
                    <p>31 people going</p>
                  </Goings>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <img src={nature3} alt="img nout found" />
                </CardHeader>
                <CardBody>
                  <Name>Trip To Palawan</Name>
                  <Goings>
                    <img src={frame} alt="img nout found" />
                    <p>31 people going</p>
                  </Goings>
                </CardBody>
              </Card>
            </div>
          </Slider>
        </ReactSlick>
        <SearchCard/>
      </Row>
    </Wrapper>
  );
};

export default HeroCard;
