import React from "react";
import { Carousel } from "react-responsive-carousel";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselView = () => {
  return (
    <Carousel
      autoPlay
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      transitionTime={1000}
    >
      <div>
        <img alt="" src={pic1} width="100%" height="300" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img alt="" src={pic2} width="100%" height="300" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
    </Carousel>
  );
};

export default CarouselView;
