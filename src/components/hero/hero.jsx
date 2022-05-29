import React from "react";
import { BacVideo, Wrapper } from "./hero.e";
import bagVideo from "../../assets/video/video.mp4";
import Navbar from "../navbar/navbar";
import HeroCard from "../hero-card/hero-card";

const Hero = () => {
  return (
    <Wrapper>
      <BacVideo>
        <video autoPlay muted loop className="vid" >
          <source src={bagVideo} type="video/mp4" />
        </video>
      </BacVideo>
      <Navbar/>
      <HeroCard/>

    </Wrapper>
  );
};

export default Hero;
