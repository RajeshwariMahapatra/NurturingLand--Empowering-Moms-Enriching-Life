import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="During pregnancy, a woman's body undergoes incredible changes to support the growth and development of the baby. From the moment of conception, the body starts producing hormones like progesterone and estrogen to create a nurturing environment for the fetus. As the pregnancy progresses, the baby's organs and systems begin to form, and the mother experiences physical and emotional changes."
            author="Dr. Sarah Johnson"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="As a doctor, I've witnessed countless miracles, but none compare to the miracle of life growing inside a woman."
            author=" Dr. Olivia Adams"

          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Your body is crafting a masterpiece. Trust the process, trust yourself, and let nature's artistry unfold."
            author="Dr. Benjamin Davis"

          />
        </LogoWrapper>
      </Slider>
    </div>
  );
}
const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;