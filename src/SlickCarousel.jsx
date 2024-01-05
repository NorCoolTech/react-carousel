import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";
import DataFetcher from "./DataFetcher";
import { useState } from "react";

import React from 'react'

const SlickCarousel = () => {
    const [people, setPeople] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);

     const settings = {
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       fade: true,
       autoplay: true,
       autoplaySpeed: 2000,
       pauseOnHover: true,
     };
    

     const onDataFetched = (data) => {
       setPeople((prevPeople) => [...prevPeople, ...data]);
       setDataFetched(true);
     };

  return (
    <section className="slick-container">
      {dataFetched && (
        <Slider {...settings}>
          {people.map((person) => {
            const { id, image, name, title, quote } = person;
            return (
              <article key={id}>
                <img src={image} alt={name} className="person-img" />
                <h5 className="name">{name}</h5>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}
        </Slider>
      )}
      <DataFetcher
        onDataFetched={onDataFetched}
      />
    </section>
  );
}

export default SlickCarousel

