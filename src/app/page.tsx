'use client'
import "boxicons/css/boxicons.min.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "@/components/Container";

const page = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a41d5751-219f-46a7-b11f-76b46897a7dd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      {/* ----------- header design --------- */}
      <Container className="w-screen">
        <header className="header">
          <div id="head_icons">
            <div className="relative h-16 w-16">
              <Image fill alt="" src={"/image/titleLogo.png"}></Image>
            </div>
            <a href="#" className="logo">
              Nirmal S.M.
            </a>
          </div>
          {/* <div className="bx bx-menu" id="menu-icon"></div> */}
          <nav className="navbar">
            <a href="#home" className="active">
              Home
            </a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>

            <span className="active-nav"></span>
          </nav>
        </header>
      </Container>

      {/* ---------- home section part --------------------- */}
      <Container>
        <section className="home" id="home">
          <div className="home-content">
            <h1>
              Hi, <br /> I'm <span>Nirmal Saru Magar</span>
            </h1>
            <div className="text-animation">
              <h3>Front-end Developer</h3>
            </div>
            <p>
              With a strong foundation in React, Next.js, Tailwind CSS, and
              TypeScript, I build responsive and user-friendly web applications.
              I enjoy turning designs into fully functional digital experiences,
              focusing on clean, efficient code and smooth user interactions.
            </p>
            <div className="btn-box">
              <a href="" className="btn">
                Hire Me
              </a>
              <a href="" className="btn">
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
                <Image fill src={"/image/logo.jpeg"} alt={"logo icons"}></Image>
              </div>
              <span className="circle-spin"></span>
            </div>
            <div className="about-content">
              <h3>
                Front-end <u>developer</u>
              </h3>
              <p>
                Hello everyone, I’m a developer with a passion for creating
                visually appealing and highly functional web applications. With
                a solid background in technologies such as React, Next.js,
                Tailwind CSS, and TypeScript, I thrive on transforming
                innovative ideas into seamless digital experiences.
              </p>
              <div>
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
              </div>
              <div className="btn-box btns">
                <a href="#" className="btn">
                  Read More
                </a>
              </div>
            </div>
          </section>
        </Container>
      </div>

      {/* --------------------- education section ------------ */}

      <Container>
        <section className="education" id="education">
          <h2 className="heading">
            My<span>Journey</span>
          </h2>
          <div className="education-row">
            <div className="education-column">
              <h3 className="title">Education</h3>
              <div className="education-box">
                <div className="education-content">
                  <div className="content">
                    <div className="year">
                      <i className="bx bxs-calendar"></i>2023-2024
                    </div>
                    <h3>Master Degree - University</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor qui ullam temporibus sit? Consequatur dicta alias
                      reiciendis ipsam doloribus fugiat laudantium rerum facilis
                      dolore. Similique aperiam harum aut ex labore.
                    </p>
                  </div>
                </div>
                <div className="education-content">
                  <div className="content">
                    <div className="year">
                      <i className="bx bxs-calendar"></i>2023-2024
                    </div>
                    <h3>Master Degree - University</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor qui ullam temporibus sit? Consequatur dicta alias
                      reiciendis ipsam doloribus fugiat laudantium rerum facilis
                      dolore. Similique aperiam harum aut ex labore.
                    </p>
                  </div>
                </div>
                <div className="education-content">
                  <div className="content">
                    <div className="year">
                      <i className="bx bxs-calendar"></i>2023-2024
                    </div>
                    <h3>Master Degree - University</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor qui ullam temporibus sit? Consequatur dicta alias
                      reiciendis ipsam doloribus fugiat laudantium rerum facilis
                      dolore. Similique aperiam harum aut ex labore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="education-column">
              <h3 className="title">Experience</h3>
              <div className="education-box">
                <div className="education-content">
                  <div className="content">
                    <div className="year">
                      <i className="bx bxs-calendar"></i>2023-2024
                    </div>
                    <h3>Web Development - Company</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor qui ullam temporibus sit? Consequatur dicta alias
                      reiciendis ipsam doloribus fugiat laudantium rerum facilis
                      dolore. Similique aperiam harum aut ex labore.
                    </p>
                  </div>
                </div>
                <div className="education-content">
                  <div className="content">
                    <div className="year">
                      <i className="bx bxs-calendar"></i>2023-2024
                    </div>
                    <h3>Web Development - Company</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor qui ullam temporibus sit? Consequatur dicta alias
                      reiciendis ipsam doloribus fugiat laudantium rerum facilis
                      dolore. Similique aperiam harum aut ex labore.
                    </p>
                  </div>
                </div>
                <div className="education-content">
                  <div className="content">
                    <div className="year">
                      <i className="bx bxs-calendar"></i>2023-2024
                    </div>
                    <h3>Web Development - Company</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor qui ullam temporibus sit? Consequatur dicta alias
                      reiciendis ipsam doloribus fugiat laudantium rerum facilis
                      dolore. Similique aperiam harum aut ex labore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>

      {/* --------------------- skill section design --------------------- */}
      <div className="sekill-bg">
        <Container>
          <section className="skills" id="skills">
            <h2 className="heading">
              My <span>Skills</span>
            </h2>

            <div className="skills-row">
              <div className="skills-column">
                <h3 className="title">Coding Skills</h3>

                <div className="skills-box">
                  <div className="skills-content">
                    <div className="progress">
                      <h3>
                        HTML <span>90%</span>
                      </h3>
                      <div className="bar">
                        <span></span>
                      </div>
                    </div>

                    <div className="progress">
                      <h3>
                        CSS <span>80%</span>
                      </h3>
                      <div className="bar">
                        <span></span>
                      </div>
                    </div>

                    <div className="progress">
                      <h3>
                        JavaScript <span>65%</span>
                      </h3>
                      <div className="bar">
                        <span></span>
                      </div>
                    </div>

                    <div className="progress">
                      <h3>
                        React JS<span>55%</span>
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
                      <h3>
                        Web Design <span>80%</span>
                      </h3>
                      <div className="bar">
                        <span></span>
                      </div>
                    </div>

                    <div className="progress">
                      <h3>
                        Web Development <span>70%</span>
                      </h3>
                      <div className="bar">
                        <span></span>
                      </div>
                    </div>

                    <div className="progress">
                      <h3>
                        UI/UX <span>60%</span>
                      </h3>
                      <div className="bar">
                        <span></span>
                      </div>
                    </div>

                    <div className="progress">
                      <h3>
                        Figma Design<span>60%</span>
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
        </Container>
      </div>
      {/* ------------------ contact ----------------- */}
      <Container>
        <section className="contact">
          <div id="contact">
            <div className="row">
              <div className="contact-left">
                <div>
                  <h1 className="sub-title"> Contact Me</h1>
                  <div className="contact-link">
                    <p>
                      <i className="bx bx-send"></i>contact@gmail.com
                    </p>
                    <p>
                      <i className="bx bx-phone"></i>0987654321
                    </p>
                  </div>

                  <div className="flex-contant">
                    <div className="social-icons">
                      <Link href="">
                        <i className="bx bxl-facebook"></i>
                      </Link>
                      <Link href="">
                        <i className="bx bxl-twitter"></i>
                      </Link>
                      <Link href="">
                        <i className="bx bxl-instagram"></i>
                      </Link>
                      <Link href="">
                        <i className="bx bxl-linkedin"></i>
                      </Link>
                    </div>
                    <div className="btn-box">
                      <a
                        href="../images/261020.jpg"
                        download
                        className="downloadBtn"
                      >
                        Downloade CV
                      </a>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </div>
              <div className="contact-right">
                <form onSubmit={onSubmit}>
                <input type="hidden" name="access_key" value="a41d5751-219f-46a7-b11f-76b46897a7dd"/>
                  <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    placeholder="Your Email"
                    required
                  />
                  <textarea
                    name="message"
                    rows="6"
                    autoComplete="off"
                    placeholder="Your Message"
                  ></textarea>
                  <div className="btn-box">
                    <button className="btn" type="sumbit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <div className="footer-bg">
        <Container>
          <footer className="footer">
            <div className="footer-text">
              <p>
                Copyright &copy; 2023 by Nirmal Saru Magar | All Rights
                Reserved.{" "}
              </p>
            </div>
            <div className="footer-iconTop">
              <a href="#">
                <i className="bx bx-up-arrow-alt"></i>
              </a>
            </div>
          </footer>
        </Container>
      </div>
    </>
  );
};

export default page;
