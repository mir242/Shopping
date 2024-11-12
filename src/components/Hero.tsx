'use client';

import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const slideData = [
    {
      id: 0,
      img: '/images/BgImage/slide1.jpg',
      title: 'set of clasically',
      mainTitle: "black freeday",
      price: "10$",
    },
    {
      id: 1,
      img: '/images/BgImage/slide2.jpg',
      title: 'Discounted ones',
      mainTitle: "Trending Item",
      price: "20$",
    },
    {
      id: 2,
      img: '/images/BgImage/slide3.jpg',
      title: 'style of parisien',
      mainTitle: "Trending Item",
      price: "30$",
    },
    {
      id: 3,
      img: '/images/BgImage/slide9.jpg',
      title: 'All kinds of bags',
      mainTitle: "Trending Item",
      price: "40$",
    },
    {
      id: 4,
      img: '/images/BgImage/slide6.jpg',
      title: "Men's suit",
      mainTitle: "black freeday",
      price: "50$",
    },
  ];

  return (
    <div className="flex justify-center items-center h-full">
      <Slider {...settings} className="w-full max-w-[1200px] mx-auto">
        {slideData.map((item) => (
          <Slide
            key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
