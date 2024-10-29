import { Nunito } from "next/font/google";
import Link from "next/link";
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
          Hi, <br /> I'&apos;m <span>Nirmal Saru Magar</span>
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
          <Link href="" className={`btn ${nunito.className}`}>
            Hire Me
          </Link>
          <Link href="" className={`btn ${nunito.className}`}>
            Let&apos;s Talk
          </Link>
        </div>
      </div>
      <div className="home-sci">
        <Link href="https://www.instagram.com/nirmal.magar58/" target="_blank">
          <i className="bx bxl-instagram-alt"></i>
        </Link>
        <Link href="https://github.com/nirmalmagar" target="_blank">
          <i className="bx bxl-github"></i>
        </Link>
        <Link href="https://www.linkedin.com/in/nirmal-magar-977915266/" target="_blank">
          <i className="bx bxl-linkedin" />
        </Link>
      </div>
      <div className="home-imgHover"></div>
    </section>
  );
};

export default Section;
