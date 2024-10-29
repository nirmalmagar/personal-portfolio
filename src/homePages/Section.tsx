import { Nunito } from "next/font/google";
import React from "react";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400"],
});

const Section = () => {
  return (
    <section className={`home ${nunito.className}`} id="home">
      <div className="home-content">
        <h1 className={`${nunito.className}`}>
          Hi, <br /> I'm <span>Nirmal Saru Magar</span>
        </h1>
        <div className="text-animation ">
          {/* <h3 className={`${nunito.className}`}>Front-end Developer</h3> */}
          <h3>Front-end Developer</h3>
        </div>
        <p className={`${nunito.className}`}>
          With a strong foundation in React/Next.js, Tailwind CSS, and
          TypeScript, I build responsive and user-friendly web applications. I
          enjoy turning designs into fully functional digital experiences,
          focusing on clean, efficient code and smooth user interactions.
        </p>
        <div className="btn-box">
          <a href="" className={`btn ${nunito.className}`}>
            Hire Me
          </a>
          <a href="" className={`btn ${nunito.className}`}>
            Let's Talk
          </a>
        </div>
      </div>
      <div className="home-sci">
        <a href="#instagram">
          <i className="bx bxl-instagram-alt"></i>
        </a>
        <a href="#github">
          <i className="bx bxl-github"></i>
        </a>
        <a href="#linkedin">
          <i className="bx bxl-linkedin" />
        </a>
      </div>
      <div className="home-imgHover"></div>
    </section>
  );
};

export default Section;
