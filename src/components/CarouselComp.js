import carouselImg from "../assets/headercarousel.svg";
import blackfriday from "../assets/blackfriday.svg";
import gift from "../assets/gift.svg";

import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: carouselImg,
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: blackfriday,
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: gift,
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
];

const CarouselComp = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <div className="w-[95vw] h-[77vh] ">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {items.map((item) => {
          return (
            <CarouselItem
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              key={item.src}
            >
              <img
                className="w-full h-auto"
                src={item.src}
                alt={item.altText}
              />
              <CarouselCaption
                captionText={item.caption}
                captionHeader={item.caption}
              />
            </CarouselItem>
          );
        })}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default CarouselComp;
