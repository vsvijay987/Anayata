import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel
      className=" flex items-center p-5 max-w-7xl mx-auto"
      autoFocus
      autoPlay
      infiniteLoop
      showArrows={false}
      showThumbs={false}
      useKeyboardArrows
      showStatus={false}
      dynamicHeight={false}
    >
      <div>
        <img src="https://res.cloudinary.com/codeamphi/image/upload/v1646155187/Colorful_Minimalist_International_Women_s_Day_Banner_anp4xn.png" />
      </div>
      <div>
        <img src="https://res.cloudinary.com/codeamphi/image/upload/v1646155201/Colorful_Minimalist_International_Women_s_Day_Banner_1_vtqsvr.png" />
      </div>
      <div>
        <img src="https://res.cloudinary.com/codeamphi/image/upload/v1646155187/Colorful_Minimalist_International_Women_s_Day_Banner_anp4xn.png" />
      </div>
    </Carousel>
  );
};

export default Banner;
