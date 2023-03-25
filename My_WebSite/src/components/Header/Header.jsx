import React, { useRef, useState, useEffect } from "react";
import Hacker from "../../assets/JSAnimation/hackingTransition";
import "./Header.scss";

function Header() {
  const [showManu, setShowMenu] = useState(false);

  const About = useRef(null)
  const Experience = useRef(null);
  const Contact = useRef(null);
  const resume = useRef(null);

  useEffect(() => {
    Hacker(About,3)
    Hacker(Experience,3);
    Hacker(Contact,3);
    Hacker(resume,3);
  }, [])
  

  return (
    <header className="header">
      <div className="contaner">
        <div className="logo">
          <img
            src="../../../public/imgs/logs/ALimo_logo_with_the_Ali_bf9017df-bfbb-440f-a14f-7291e4ff8088.png"
            alt="#"
          />
        </div>

        <div className="right">
          <div className="burger" onClick={() => setShowMenu((pre) => !pre)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="links">
            <div className="link">
              <ol>
                <li>
                  <title>Logo</title>
                  <a href="#About">
                    <span className="navNumber">01.</span>{" "}
                    <span data-value="About" ref={About}>
                      About
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#Experience">
                    <span className="navNumber">02.</span>
                    <span data-value="Experience" ref={Experience}>
                      Experience
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#Contact">
                    <span className="navNumber">03.</span>

                    <span data-value="Contact" ref={Contact}>
                      Contact
                    </span>
                  </a>
                </li>
              </ol>
            </div>
            <div className="button">
              <button ref={resume} data-value="Resume">Resume</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
