import React, {useEffect, useRef} from "react";
import Email from "../../Bata Components/My_email/email";
import Hacker from "../../../assets/JSAnimation/hackingTransition";
import Social from "../../Bata Components/Social/social";
import "./Contact.scss";

function Contact() {
  const header = useRef(); +

  useEffect(() => {
    Hacker(header, 5);
  }, []);

  return (
    <section className="contact container">
      <div className="header">
        <h1 ref={header} data-value={"Contact Me"}>
          Contact Me
        </h1>
      </div>
      <div className="body">
        <div className="contact-msg">
          <p>
            Thanks for reaching out! Please provide your name, email, and
            message
          </p>
          <p>
            so I can reply within 24 hours. Contact me on social media if you
            prefer.
          </p>
          <p>thanks😘</p>
        </div>
        <div className="send-massage button">
          <button>Send Massage</button>
        </div>
      </div>
      <Email />
      <Social />
    </section>
  );
}

export default Contact;
