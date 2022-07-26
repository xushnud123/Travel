import React from "react";
import { BacVideo, Wrapper } from "./hero.e";
import img from "../../assets/img/bac.jpg";
import Navbar from "./navbar/navbar";
import HeroCard from "./hero-card/hero-card";

const Hero = ({open,setOpen}) => {
  
  return (
    <Wrapper>
      <BacVideo>
        {/* <img src={img} alt="" /> */}
      </BacVideo>
      <Navbar open={open} setOpen={setOpen}/>
      <HeroCard/>

    </Wrapper>
  );
};

export default Hero;
