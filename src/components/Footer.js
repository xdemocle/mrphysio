import React from "react";
import "./Footer.css";

export default () => {
  return (
    <div className="footer">
      <div className="logo" title="Meyer & Rossouw Physio">
        MR Physio
      </div>
      <div>
        Get directions:
        <br />
        <a
          href="https://g.page/mr-physio-cape-town?share"
          target="_blank"
          title="Get direction on Google Maps"
          rel="noreferrer"
        >
          158 Kloof Rd, Bantry Bay, Cape Town, 8005
        </a>
      </div>
    </div>
  );
};
