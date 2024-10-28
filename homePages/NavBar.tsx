import React from "react";
import Container from "@/components/Container";
import Image from "next/image";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400"],
});
const NavBar = () => {

  return (
    <div>
      <Container className="w-screen">
        <header className="header">
          <div id="head_icons">
            <div className="relative h-16 w-16">
              <Image fill  alt="" src={"/image/titleLogo.png"}/>
            </div>
            <a href="#" className="logo">
              Nirmal S.M.
            </a>
          </div>
          <nav className={`navbar ${nunito.className}`}>
            <a href="#home" className={`active ${nunito.className}`}>
              Home
            </a>
            <a href="#about" className={`navbar ${nunito.className}`}>About</a>
            <a className={`${nunito.className}`} href="#education">Education</a>
            <a className={`${nunito.className}`} href="#skills">Skills</a>
            <a className={`${nunito.className}`} href="#contact">Contact</a>

            <span className="active-nav"></span>
          </nav>
        </header>
      </Container>
    </div>
  );
};

export default NavBar;
