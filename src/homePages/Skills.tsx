import React from "react";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        My <span>Skills</span>
      </h2>

      <div className="skills-row">
        <div className="skills-column">
          <h3 className="title font-nunito">Coding Skills</h3>

          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3 className="font-nunito">
                  React Js <span className="font-nunito">90%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress">
                <h3 className="font-nunito">
                  Next Js <span className="font-nunito">90%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress">
                <h3 className="font-nunito">
                  TypeScript <span className="font-nunito">80%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress">
                <h3 className="font-nunito">
                  Tailwind CSS<span className="font-nunito">95%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-column">
          <h3 className="title">Professional Skills</h3>

          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3 className="font-nunito">
                Technical Skills <span className="font-nunito">90%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress">
                <h3 className="font-nunito">
                Collaboration and Communication <span className="font-nunito">80%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress">
                <h3 className="font-nunito">
                Problem-Solving Skills <span className="font-nunito">85%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress">
                <h3 className="font-nunito">
                UI/UX Design Principles<span className="font-nunito">90%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
