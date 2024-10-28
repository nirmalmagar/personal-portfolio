import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        About <span>Me</span>
      </h2>
      <div className="about-img">
        {/* <img src="../images/logo.jpeg" alt="profile picture"> */}
        <div className="relative h-[23rem] w-[23rem]">
          <Image fill src={"/image/logo.jpeg"} alt="logo icons" />
        </div>
        <span className="circle-spin"></span>
      </div>
      <div className="about-content">
        <h3>
          Front-end <u>developer</u>
        </h3>
        <p>
          Hello everyone, I’m a developer with a passion for creating visually
          appealing and highly functional web applications. With a solid
          background in technologies such as React, Next.js, Tailwind CSS, and
          TypeScript, I thrive on transforming innovative ideas into seamless
          digital experiences.
        </p>
        {/* <div>
        <p>
          I graduated with a Bachelor's degree in Computer Science and
          Information Technology (BSc.CSIT), which has equipped me with
          a strong technical foundation and problem-solving skills.
          During my year of professional experience, I have contributed
          to various projects, including a Training Management System
          and the Pace Infosys website, where I honed my skills in UI
          design and API integration.
        </p>
        <p>
          I enjoy collaborating with cross-functional teams to deliver
          user-centric solutions. My goal is to write clean,
          maintainable code and continuously learn new technologies to
          improve my craft. When I’m not coding, you can find me
          exploring new web trends, reading about the latest tech
          developments, or working on personal projects to further
          enhance my skills.
        </p>
        <span id="about_section">
          Feel free to reach out if you want to connect or discuss
          potential collaborations!
        </span>
      </div> */}
        <div className="btn-box btns">
          <a href="#" className="btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
