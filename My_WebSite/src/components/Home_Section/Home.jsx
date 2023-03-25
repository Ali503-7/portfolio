import React, { useEffect, useRef } from "react";
import Hacker from "../../assets/JSAnimation/hackingTransition";
import "./Home.scss";

function Home() {
  const MyName = useRef(null);
  const AboutMe = useRef(null);
  const AboutMe2 = useRef(null);
  const openTag = useRef(null)
  const closeTag = useRef(null)

  useEffect(() => {
    Hacker(MyName,3);
    Hacker(openTag, 1);
    Hacker(closeTag, 1);
    Hacker(AboutMe ,1);
    Hacker(AboutMe2, 1);
  });

  return (
    <section className="Home">
      <div className="contaner">
        <div className="top" ref={openTag} data-value="<Hi, My Name's>">
          {"<"}Hi, My Name's{">"}
        </div>
        <div className="mid">
          <div className="name" ref={MyName} data-value="ALI MOHAMED">
            ALI MOHAMED
          </div>
          <div className="workAs">
            <p
              ref={AboutMe}
              data-value="I have experience in building responsive"
            >
              I have experience in building responsive
            </p>
            <p
              ref={AboutMe2}
              data-value="and dynamic websites and web applications."
            >
              and dynamic websites and web applications.
            </p>
          </div>
        </div>
        <div className="bottom" ref={closeTag} data-value="</Hi, My Name's>">
          {"<"}Hi, My Name's{">"}
        </div>
      </div>
    </section>
  );
}

export default Home;
