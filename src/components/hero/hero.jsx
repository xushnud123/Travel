import React from "react";
import { BacVideo, Wrapper } from "./hello.e";
import bagVideo from "../../assets/video/video.mp4";
import Navbar from "../navbar/navbar";

const Hero = () => {
  return (
    <Wrapper>
      <BacVideo>
        <video autoPlay muted loop className="vid" >
          <source src={bagVideo} type="video/mp4" />
        </video>
      </BacVideo>
      <Navbar>
          
      </Navbar>
    </Wrapper>
  );
};

export default Hero;
