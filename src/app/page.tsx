import React from "react";
import "boxicons/css/boxicons.min.css";
import Container from "@/components/Container";
import Education from "@/homePages/Education";
import Skills from "@/homePages/Skills";
import Contact from "@/homePages/Contact";
import Footer from "@/homePages/Footer";
import Section from "@/homePages/Section";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import { Nunito } from "next/font/google";
import Link from "next/link";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400"],
});
const page = () => {
  return (
    <>
      {/* ----------- header design --------- */}
      <Container className="w-screen">
        <header className="header">
          <div id="head_icons">
            <div className="relative h-16 w-16">
              <Image fill alt="" src={"/image/titleLogo.png"} />
            </div>
            <a href="#" className={`logo`}>
              Nirmal S.M.
            </a>
          </div>
          <nav className={`navbar`}>
            <Link href="#home" className={`active ${nunito.className}`}>
              Home
            </Link>
            <Link href="#about" className={`navbar ${nunito.className}`}>
              About
            </Link>
            <Link href="#education" className={`${nunito.className}`}>
              Education
            </Link>
            <Link href="#skills" className={`${nunito.className}`}>
              Skills
            </Link>
            <Link href="#projects" className={`${nunito.className}`}>
              Projects
            </Link>
            <Link href="#contact" className={`${nunito.className}`}>
              Contact
            </Link>

            <span className="active-nav" />
          </nav>
        </header>
      </Container>

      {/* ---------- home section part --------------------- */}
      <Container>
        <Section />
      </Container>

      {/* -----------------about me section --------------- */}
      <div className="about-section">
        <Container>
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
              <p className={`font-nunito`}>
                Hello everyone, I&apos;m a developer with a passion for creating
                visually appealing and highly functional web applications. With
                a solid background in technologies such as React, Next.js,
                Tailwind CSS, and TypeScript, I thrive on transforming
                innovative ideas into seamless digital experiences.
              </p>
              <div>
                <p className="font-nunito">
                  I graduated with a Bachelor&apos;s degree in Computer Science
                  and Information Technology (BSc.CSIT), which has equipped me
                  with a strong technical foundation and problem-solving skills.
                  During my year of professional experience, I have contributed
                  to various projects, including a Training Management System
                  and the Pace Infosys website, where I honed my skills in UI
                  design and API integration.
                </p>
                <p className="font-nunito">
                  I enjoy collaborating with cross-functional teams to deliver
                  user-centric solutions. My goal is to write clean,
                  maintainable code and continuously learn new technologies to
                  improve my craft. When I&apos;m not coding, you can find me
                  exploring new web trends, reading about the latest tech
                  developments, or working on personal projects to further
                  enhance my skills.
                </p>
                <span className="">
                  <p className="mb-1 text-base">
                    Feel free to reach out if you want to connect or discuss
                    potential collaborations!
                  </p>
                </span>
              </div>
              <div className="btn-box btns">
                <a href="#" className="btn font-nunito">
                  Read More
                </a>
              </div>
            </div>
          </section>
        </Container>
      </div>

      {/* --------------------- education section ------------ */}
      <Container>
        <Education />
      </Container>

      {/* --------------------- skill section design --------------------- */}
      <div className="skills-bg">
        <Container>
          <Skills />
        </Container>
      </div>

      {/* -------------------projects------------------ */}
      <div className="project-page">
        <Container>
        <ProjectCard />
        </Container>
      </div>

      {/* ------------------ contact ----------------- */}
      <div className="contact">
      <Container>
        <Contact />
      </Container>
      </div>
      

      {/* -----------------------footer--------------------- */}
      <div className="footer-bg">
        <Container>
          <Footer />
        </Container>
      </div>
    </>
  );
};

export default page;
