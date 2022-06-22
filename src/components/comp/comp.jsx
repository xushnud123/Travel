import React, { useEffect } from "react";
import AOS from "aos";
import { Card, CardWrapper, CompWrapper, ReactSlick, Row, Title } from "./comp.e";
import philip from '../../assets/img/comp/23321.svg'
import cebu from "../../assets/img/comp/Cebu_Pacific_Air_logo_logotype.svg";
import asia from "../../assets/img/comp/AirAsia_logo_logotype_circle.svg";

const Comp = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  });

     const settings = {
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       autoplay: true,
       speed: 3000,
       autoplaySpeed: 3000,
       cssEase: "linear",
       responsive: [
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
             autoplaySpeed: 3000,
           },
         },
         {
           breakpoint: 350,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             autoplaySpeed:4000
           },
         },
       ],
     };
  return (
    <CompWrapper data-aos="zoom-in-down">
      <Row>
        <Title>Trusted by companies</Title>
        <CardWrapper>
          <ReactSlick {...settings}>
            <div>
              <Card>
                <img src={asia} className="asia" alt="img nout found" />
              </Card>
            </div>
            <div>
              <Card>
                <img src={cebu} alt="img nout found" />
              </Card>
            </div>
            <div>
              <Card>
                <img src={philip} alt="img nout found" />
              </Card>
            </div>
            <div>
              <Card>
                <img src={asia} className="asia" alt="img nout found" />
              </Card>
            </div>
            <div>
              <Card>
                <img src={cebu} alt="img nout found" />
              </Card>
            </div>
            <div>
              <Card>
                <img src={philip} alt="img nout found" />
              </Card>
            </div>
          </ReactSlick>
        </CardWrapper>
      </Row>
    </CompWrapper>
  );
};

export default Comp;
