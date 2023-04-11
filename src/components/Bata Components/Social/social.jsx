import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./social.scss";

function social() {
  return (
    <div className="social container">
      <div className="social-links">
        <a href="https://www.linkedin.com/in/ali-mohamed-b351a6206/">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://github.com/Ali503-7">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.frontendmentor.io/profile/Ali503-7">
          <img
            src="/imgs/logs/Social/frontend-mentor-logo-DD85EFE0E9-seeklogo.com.png"
            alt=""
          />
        </a>
      </div>
      <span className="line"></span>
    </div>
  );
}

export default social;
