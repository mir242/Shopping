import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const images = [
  '../public/images/Bgimages/slide1.jpg',
  '../public/images/Bgimages/slide2.jpg',
  '../public/images/Bgimages/slide3.jpg',

];


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};



const Hero = () => {
  return (
    <div className="carousel">
      <slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </slider>
    </div>
  );
};





export default Hero
