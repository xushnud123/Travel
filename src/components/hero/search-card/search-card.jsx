import React, { useEffect, useState } from "react";
import AOS from "aos";
import Ripple from "../../common/ripple-button/Ripple";
import "react-datepicker/dist/react-datepicker.css";
import selectImg from '../../../assets/img/search-card/Group.svg'
import data from '../../../assets/img/search-card/data.svg'
import person from "../../../assets/img/search-card/person.svg";
import { Card, Row, Wrapper,CardHeader,Selects, InputWrapper,Data } from "./search-card.e";


const SearchCard = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setDate] = useState(new Date());
  const today = new Date();

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

    const selectDateHandler = (d) => {
      setDate(d);
    };

    useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 600,
        easing: "ease-in-sine",
        delay: 100,
      });
    });
    
  return (
    <Wrapper
      // initial={{
      //   scale: 0,
      // }}
      // animate={{
      //   scale: 1,
      // }}
      // style={{}}
      // transition={{ duration: 0.1 }}
      data-aos="fade-left"
    >
      <Row>
        <Card
          // initial={{
          //   scale: 0,
          // }}
          // animate={{
          //   scale: 1,
          // }}
          // style={{}}
          // transition={{ duration: 0.9 }}
        >
          <CardHeader>
            <img src={selectImg} alt="" />
            <InputWrapper open={true}>
              <p>Accommodation</p>
              <Selects
                defaultValue={options[0]}
                onChange={setSelectedOption}
                options={options}
                className="name"
              />
            </InputWrapper>
          </CardHeader>
          <CardHeader>
            <img src={data} alt="img noud found" />
            <InputWrapper>
              <p>Check-in</p>
              <Data
                dateFormat="yyyy.MM.dd"
                selected={startDate}
                onChange={selectDateHandler}
                minDate={today}
                todayButton={"Today"}
                className="red-border"
              />
            </InputWrapper>
          </CardHeader>
          <CardHeader>
            <img src={data} alt="img noud found" />
            <InputWrapper>
              <p>Check-in</p>
              <Data
                dateFormat="yyyy.MM.dd"
                selected={startDate}
                onChange={selectDateHandler}
                minDate={today}
                todayButton={"Today"}
                className="red-border"
              />
            </InputWrapper>
          </CardHeader>
          <CardHeader>
            <img src={person} alt="img noud found" />
            <InputWrapper>
              <p>Guests</p>
              <Data
                dateFormat="yyyy.MM.dd"
                selected={startDate}
                onChange={selectDateHandler}
                minDate={today}
                todayButton={"Today"}
                className="red-border"
              />
            </InputWrapper>
          </CardHeader>
          <CardHeader>
            <Ripple>Search</Ripple>
          </CardHeader>
        </Card>
      </Row>
    </Wrapper>
  );
};

export default SearchCard;
