// import React from "react";
// import Carousel from "react-bootstrap/Carousel";
 import Countdownclock from "../components/Countdownclock";
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import Herosectioncard from "../components/Herosectioncard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HeroSection = () => {
  return (
    <div className="">
      <div className="fixed w-full">
        {/* <Carousel controls={false} fade={true} indicators={false}>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 h-screen lg:w-full lg:h-screen "
              src="https://c0.wallpaperflare.com/preview/440/715/681/dark-green-green-elaf-dark-background.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 h-screen lg:w-full lg:h-screen"
              src="https://cdn.wallpapersafari.com/74/34/921CI3.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 h-screen lg:w-full lg:h-screen"
              src="https://t3.ftcdn.net/jpg/02/97/91/38/360_F_297913876_pxLCVBrLEyznyqdHvNpKmNRPvYWoqlEW.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel> */}
        <Carousel infiniteLoop={true} interval={3000} autoPlay={true}renderIndicator={false} axis='horizontal' showArrows={false} showIndicators={false} showStatus={false}>
                <div>
                    <img src="https://c0.wallpaperflare.com/preview/440/715/681/dark-green-green-elaf-dark-background.jpg"
                    className="d-block w-100 h-screen lg:w-full lg:h-screen " />
                    
                </div>
                <div>
                    <img src="https://t3.ftcdn.net/jpg/02/97/91/38/360_F_297913876_pxLCVBrLEyznyqdHvNpKmNRPvYWoqlEW.jpg"
                    className="d-block w-100 h-screen lg:w-full lg:h-screen " />
                   
                </div>
                <div>
                    <img src="https://cdn.wallpapersafari.com/74/34/921CI3.jpg"
                    className="d-block w-100 h-screen lg:w-full lg:h-screen " />
                    
                </div>
            </Carousel>
      </div>

      <div className="absolute z-100 lg:flex lg:flex-col lg:h-screen">
        

        <div className="mt-14 mb-4 pb-2 flex items-end lg:mb-20 xl:pb-44 h-3/4">
          <Countdownclock />
          </div>
          <div className="flex justify-center items-end  xl:mt-8 ">
          <Herosectioncard />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
