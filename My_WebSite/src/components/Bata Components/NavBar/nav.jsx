import React, { useEffect, useRef, useContext } from "react";
import { PageSwiper, pages } from "../../../App.jsx";
import "./nav.scss";

function Nav({ showManu }) {
  const delayData = useRef(null);
  const { whereAMi } = useContext(PageSwiper);

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
        <a href="#ABOUT" onClick={() => whereAMi(pages.HOME_PAGE.NAME)}>
          ABOUT
        </a>
      </div>
      <div className="bar" data-delay=".8s">
        <a href="#SKILLS" onClick={() => whereAMi(pages.SKILLS_PAGE.NAME)}>
          SKILLS
        </a>
      </div>
      <div className="bar" data-delay=".9s">
        <a href="#EXPERIENCE">EXPERIENCE</a>
      </div>
      <div className="bar" data-delay="1.1s">
        <a href="youtube.com">CONTACT</a>
      </div>
      <div className="bar" data-delay="1.2s"></div>
      <div className="bar" data-delay="1.3s"></div>
      <div className="bar" data-delay="1.5s"></div>
    </div>
  );
}

export default Nav;
