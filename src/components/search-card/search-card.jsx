import React from "react";
import Ripple from "../common/ripple-button/Ripple";


import { Card, Row, Wrapper, SearchBtn } from "./search-card.e";

const handlCelick = (e) =>{

}

const SearchCard = () => {

  return (
    <Wrapper>
      <Row>
        <Card></Card>
        <Ripple >
            Search
        </Ripple>
      </Row>
    </Wrapper>
  );
};

export default SearchCard;
