import React from "react";
import Carousel from "./Carousel";
import TimeBanner from './TimeBanner';

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel />
      <div className="artist_name">
        <div className="wrapper">Stock Images</div>
      </div>
      <TimeBanner />
    </div>
  );
};

export default Featured;
