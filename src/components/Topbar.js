import React, { useState, useEffect } from "react";
import "./Topbar.css";

export default ({ dynamic = true }) => {
  const [topbarVisibility, setTopbarVisibility] = useState(0);
  const handleScroll = () => {
    const wintop = window.pageYOffset,
      winheight = window.innerHeight,
      scrolltrigger = 0.5;

    // console.log("%scrolled=" + (wintop / winheight) * 100);

    if (wintop / winheight > scrolltrigger) {
      // console.log("scroll bottom");
      setTopbarVisibility(true);
    } else {
      setTopbarVisibility(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`topbar ${dynamic ? "scrolls" : ""}${
        topbarVisibility ? " scrolling" : ""
      }`}
    >
      <div className="topbar--inner">
        <div className="logo">MrPhysio</div>
        <div className="contact">
          <ul>
            <li>
              <span>Zeno:</span> <a href="tel:+27823205984">082 320 5984</a>
            </li>
            <li>
              <span>Lorenzo:</span> <a href="tel:+27827264468">082 726 4468</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
