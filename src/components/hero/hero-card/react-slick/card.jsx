import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardHeader, Goings, Name ,CardWrapper} from "../hero-card.e";
import frame from "../../../../assets/img/icon/Frame.svg";
import nature1 from "../../../../assets/img/hero-slick/unsplash_GNdp2Q4VZjw.png";
import nature3 from "../../../../assets/img/hero-slick/unsplash_MdTtpxGlrz8.png";
import nature2 from "../../../../assets/img/hero-slick/unsplash_rC2_aH8lAlU.png";

const Cards = ({ item}) => {
    

  return (
    <React.Fragment>
      <motion.div
        initial={{
          scale: 0,          
        }}
        animate={{
          scale: 1,
        }}
        transition={{ duration: 0.9 }}
        className="name"
      >
        <Card translate="0" layout>
          <CardHeader>
            <motion.img
              src={
                item.headerImg === 1
                  ? nature1
                  : item.headerImg === 2
                  ? nature2
                  : nature3
              }
              alt="img nout found"
            />
          </CardHeader>
          <CardBody>
            <Name>{item.title}</Name>
            <Goings>
              <motion.img src={frame} alt="img nout found" />
              <motion.p>{item.going}</motion.p>
            </Goings>
          </CardBody>
        </Card>
      </motion.div>
    </React.Fragment>
  );
};

export default Cards;
