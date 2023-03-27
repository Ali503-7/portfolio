import React, { useEffect, useRef } from "react";
import "./nav.scss";

function Nav({ showManu }) {
  const delayData = useRef(null);

  useEffect(() => {
    const listOfDivs = delayData.current.children;
    for (let i = 0; i < 10; i++) {
      const delay = listOfDivs[i].dataset.delay;
      document.documentElement.style.setProperty(`--delay-${i}`, delay);
    }
  }, []);

  return (
    <div className={showManu ? "nav show" : "nav"} ref={delayData}>
      <div className="bar" data-delay=".4s"></div>
      <div className="bar" data-delay=".5s"></div>

      <div className="bar" data-delay=".6s"></div>
      <div className="bar" data-delay=".7s">
        <button>ABOUT</button>
      </div>
      <div className="bar" data-delay=".8s">
        <button>SKILLS</button>
      </div>
      <div className="bar" data-delay=".9s">
        <button>EXPERIENCE</button>
      </div>
      <div className="bar" data-delay="1.1s">
        <button>CONTACT</button>
      </div>
      <div className="bar" data-delay="1.2s"></div>
      <div className="bar" data-delay="1.3s"></div>
      <div className="bar" data-delay="1.5s"></div>
    </div>
  );
}

export default Nav;
