import React from "react";
import { Zoom } from "react-slideshow-image";
import "./Studio.css";

import a from "../images/studio/DSC0342.jpg";
import b from "../images/studio/DSC0346.jpg";
import d from "../images/studio/DSC0417.jpg";
import e from "../images/studio/DSC0421.jpg";
import f from "../images/studio/DSC0430.jpg";

export default () => {
  const images = [a, b, c, d, e, f];

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
            <img
              style={{ objectFit: "cover", width: "100%" }}
              src={each}
              alt={each}
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
};
