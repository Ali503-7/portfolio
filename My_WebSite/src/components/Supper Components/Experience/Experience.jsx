import React, { useEffect, useRef } from "react";
import Hacker from "../../../assets/JSAnimation/hackingTransition";
import imgs from "../../../assets/API/data";
import CustomScrollDiv from "../../../assets/ConstomeScrollbar/ScrollBar";
import "./Experience.scss";

function Experience() {
  const experience = useRef(null);

  useEffect(() => {
    Hacker(experience, 5);
  }, []);

  const Project = () => {
    return imgs.map((img) => {
      return (
        <div className="Project">
          <div className="img">
            <img src={img.url} alt="not found" />
            <div className="code">
              <a href={img.code} target="_blank">
                <button>Code</button>
              </a>
            </div>
            <div className="live">
              <a href={img.live} target="_blank">
                <button>Live</button>
              </a>
            </div>
          </div>
          <div className="name">
            <span>{img.name}</span>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="experience container">
      {/* <div className="header">
        <h1 ref={experience} data-value="Experience">
          Experience
        </h1>
      </div> */}
      <div className="open-tag">
        {"<"}My Work{">"}
      </div>
      <div className="body">
        <div className="selector">
          <div className="box" about="All">
            All
          </div>
          <div className="box" about="Html-Css">
            Html-Css
          </div>
          <div className="box" about="Scss">
            Scss
          </div>
          <div className="box" about="React">
            React
          </div>
          <div className="box" about="Api">
            Api
          </div>
        </div>
        <div className="workSection">
          <CustomScrollDiv>
            {Project()}
          </CustomScrollDiv>
        </div>
      </div>
      <div className="close-tag">
        {"<"}/My Work{">"}
      </div>
    </section>
  );
}

export default Experience;
