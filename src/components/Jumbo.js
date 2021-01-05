import React, { useEffect, useState } from "react";
import Topbar from "./Topbar";
import defaultBgSrc from "../images/bg/00.jpg";
import zeroOneBgSrc from "../images/bg/01.jpg";
import zeroTwoBgSrc from "../images/bg/02.jpg";
import zeroThreeBgSrc from "../images/bg/03.jpg";
import zeroFourBgSrc from "../images/bg/04.jpg";
import "./jumbo.css";

export default () => {
  const [bgSrc, setBgSrc] = useState(defaultBgSrc);
  let frame = 0;

  const setIntervalHandler = () => {
    frame = Math.floor(Math.random() * 4) + 1;

    if (frame === 1) {
      setBgSrc(zeroOneBgSrc);
    } else if (frame === 2) {
      setBgSrc(zeroTwoBgSrc);
    } else if (frame === 3) {
      setBgSrc(zeroThreeBgSrc);
    } else if (frame === 4) {
      setBgSrc(zeroFourBgSrc);
    } else setBgSrc(defaultBgSrc);

    console.log(bgSrc);
  };

  useEffect(() => {
    const intervalId = setInterval(setIntervalHandler, 10000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div className="jumbo">
      <div
        className="jumbo--background"
        style={{ backgroundImage: `url(${bgSrc})` }}
      ></div>
      <Topbar dynamic={false} />
      <div className="jumbo--inner">
        <div className="jumbo--overlay"></div>
        <h2 className="jumbo--slogan">
          WE CARE
          <br />
          ABOUT YOUR HEALTH
        </h2>
      </div>
    </div>
  );
};
