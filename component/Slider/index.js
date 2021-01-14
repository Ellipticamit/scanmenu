import React from 'react';
import Slider from 'react-slick';

function MySlider(props) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {props.children}
      <style global jsx>{`
        .slick-slider {
          position: relative;
          display: block;
          box-sizing: border-box;
          padding: 0px 30px;
          margin-left: -14px;
        }
        .slick-list {
          position: relative;
          display: block;
          margin: 0;
          padding: 0;
        }
        .slick-slide div {
          outline: none;
        }
        .slick-track {
          z-index: 999;
          margin: 0px;
          display: flex;
          -webkit-box-align: stretch;
          align-items: stretch;
          flex-flow: row;
        }
      `}</style>
    </Slider>
  );
}

export default MySlider;
