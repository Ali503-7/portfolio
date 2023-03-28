import React, { useRef, useState, useEffect } from "react";
import Hacker from "../../assets/JSAnimation/hackingTransition";
import Nav from "../NavBar/nav";
import "./Header.scss";

function Header() {
  const [showManu, setShowMenu] = useState(false);

  const About = useRef(null);
  const Experience = useRef(null);
  const Contact = useRef(null);
  const resume = useRef(null);

  useEffect(() => {
    Hacker(About, 6);
    Hacker(Experience, 6);
    Hacker(Contact, 6);
    Hacker(resume, 6);
  }, []);

  function Toggle() {
    setShowMenu((pre) => !pre);
  }

  return (
    <>
      <Nav showManu={showManu}/>
      <header className="header">
        <div className="contaner">
          <div className="logo">
            <img
              src="/imgs/logs/ALimo_logo_with_the_Ali_bf9017df-bfbb-440f-a14f-7291e4ff8088.png"
              alt="#"
            />
          </div>

          <div className="right">
            <div className="burger" onClick={() => Toggle()}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="links">
              <div className="link">
                <ol>
                  <li>
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
                <button ref={resume} data-value="Resume">
                  Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
