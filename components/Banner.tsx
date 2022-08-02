import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { urlFor } from "../sanity";
import { BannerType } from "../typings";

interface Props {
    banners: [BannerType];
}

const Banner = ({ banners }: Props) => {
    return (
        <Carousel
            className=" flex items-center px-5 max-w-7xl mx-auto"
            autoFocus
            autoPlay
            infiniteLoop
            showArrows={false}
            showThumbs={false}
            useKeyboardArrows
            showStatus={false}
            dynamicHeight={false}
        >
            {banners.map((banner: BannerType) => (
                <div key={banner._id}>
                    <img src={urlFor(banner.mainImage).url()!} />
                </div>
            ))}
        </Carousel>
    );
};

export default Banner;
