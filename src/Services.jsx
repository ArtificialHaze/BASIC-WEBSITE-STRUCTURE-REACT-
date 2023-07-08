import React from "react";
import "./services.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
      >
        <div>
          <img src="" alt="Image-01" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src="" alt="Image-02" />
          <p className="legend">Peer-to-Peer Support</p>
        </div>
        <div>
          <img src="" alt="Image-03" />
          <p className="legend">Front-end</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
