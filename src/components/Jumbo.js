import React from "react";
import { Fade } from "react-slideshow-image";
import Topbar from "./Topbar";
import defaultBgSrc from "../images/bg/00.jpg";
import zeroOneBgSrc from "../images/bg/01.jpg";
import zeroTwoBgSrc from "../images/bg/02.jpg";
import zeroThreeBgSrc from "../images/bg/03.jpg";
import zeroFourBgSrc from "../images/bg/04.jpg";
import "./Jumbo.css";

export default () => {
  return (
    <div className="jumbo">
      <Topbar dynamic={false} />
      <Fade autoplay={true} transitionDuration={500} duration={6000}>
        <div className="jumbo">
          <div
            className="jumbo--background"
            style={{ backgroundImage: `url(${defaultBgSrc})` }}
          ></div>
          <div className="jumbo--inner">
            <div className="jumbo--overlay"></div>
            <h1 className="jumbo--slogan">
              WE CARE
              <br />
              ABOUT YOUR WELL-BEING
            </h1>
          </div>
        </div>
        <div className="jumbo">
          <div
            className="jumbo--background"
            style={{ backgroundImage: `url(${zeroOneBgSrc})` }}
          ></div>
          <div className="jumbo--inner">
            <div className="jumbo--overlay"></div>
            <h1 className="jumbo--slogan">
              WE CARE
              <br />
              ABOUT YOUR WELL-BEING
            </h1>
          </div>
        </div>
        <div className="jumbo">
          <div
            className="jumbo--background"
            style={{ backgroundImage: `url(${zeroTwoBgSrc})` }}
          ></div>
          <div className="jumbo--inner">
            <div className="jumbo--overlay"></div>
            <h1 className="jumbo--slogan">
              WE CARE
              <br />
              ABOUT YOUR WELL-BEING
            </h1>
          </div>
        </div>
        <div className="jumbo">
          <div
            className="jumbo--background"
            style={{ backgroundImage: `url(${zeroThreeBgSrc})` }}
          ></div>
          <div className="jumbo--inner">
            <div className="jumbo--overlay"></div>
            <h1 className="jumbo--slogan">
              WE CARE
              <br />
              ABOUT YOUR WELL-BEING
            </h1>
          </div>
        </div>
        <div className="jumbo">
          <div
            className="jumbo--background"
            style={{ backgroundImage: `url(${zeroFourBgSrc})` }}
          ></div>
          <div className="jumbo--inner">
            <div className="jumbo--overlay"></div>
            <h1 className="jumbo--slogan">
              WE CARE
              <br />
              ABOUT YOUR WELL-BEING
            </h1>
          </div>
        </div>
      </Fade>
    </div>
  );
};
