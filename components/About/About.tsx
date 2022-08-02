import React from "react";

const About = () => {
    return (
        <div className="p-6 flex mx-auto text-center mt-36 lg:mt-0 lg:w-5/6 h-screen flex-col lg:items-center lg:justify-center">
            <p
                className=" text-7xl font-head font-extrabold mb-12 lg:w-2/3 lg:text-8xl"
                style={{ wordSpacing: "15px" }}
            >
                अनायत्त
            </p>

            <p
                className="font-para font-bold mb-10 lg:px-10"
                style={{ wordSpacing: "3px", letterSpacing: "2px" }}
            >
                Only 27% of India's working population comprises of women,
                despite the number of women having access to secondary and
                college education being at an all time high. Women especially in
                tier 2 and 3 cities in India tend to take breaks in their
                careers due to familial responsibilities. Our aim is to aid
                upskilling and networking amongst them to help advance their
                careers. Follow us to get updates on our latest workshops and
                networking opportunities.
            </p>
        </div>
    );
};

export default About;
