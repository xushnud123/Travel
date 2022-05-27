import React, { useState } from "react";
import Slider from "react-slick";
import {
  HeroTitle,
  Landscape,
  ReactSlick,
  Row,
  Title,
  Vacation,
  Wrapper,
} from "./hero-card.e";
import plane from '../../assets/img/hero/plane.svg'



const HeroCard = () => {
    const [open,setOpen] = useState(false)

    const handlePlane = () => {
        setOpen(true);
    }
    setTimeout(handlePlane,500)

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerPadding:50
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
        <ReactSlick>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </ReactSlick>
      </Row>
    </Wrapper>
  );
};

export default HeroCard;
