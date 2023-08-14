import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Carousel.scss";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  // Tạo state để kiểm soát trạng thái autoplay
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    let autoplayInterval;

    if (autoplayEnabled) {
      autoplayInterval = setInterval(nextSlide, 3000); // Chuyển slide sau mỗi 3 giây
    }

    return () => {
      clearInterval(autoplayInterval); // Xóa interval khi component unmount
    };
  }, [slide, autoplayEnabled]);

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
      <button onClick={() => setAutoplayEnabled(!autoplayEnabled)}>
        {autoplayEnabled ? "Pause" : "Play"}
      </button>
    </div>
  );
};
