import React from "react";
import { Zoom } from "react-slideshow-image";
import "./Studio.css";

export default () => {
  const images = [
    "/static/images/studio/_DSC0342.jpg",
    "/static/images/studio/_DSC0346.jpg",
    "/static/images/studio/_DSC0376.jpg",
    "/static/images/studio/_DSC0417.jpg",
    "/static/images/studio/_DSC0421.jpg",
    "/static/images/studio/_DSC0430.jpg",
  ];

  const zoomInProperties = {
    indicators: true,
    scale: 1.4,
  };

  return (
    <div className="studio">
      <h2 className="team--title">The studio</h2>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} style={{ width: "100%" }}>
            <img style={{ objectFit: "cover", width: "100%" }} src={each} />
          </div>
        ))}
      </Zoom>
    </div>
  );
};
