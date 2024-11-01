import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <>
      <section id="projects">
        <h2 className="heading">
          My <span>Projects</span>
        </h2>
        <div className="grid grid-cols-3 gap-y-14">
          <Link href={""} target="_blank" id="portfolio-img" className="relative w-[300px] h-[170px]">
            <Image
              className="rounded-lg"
              fill
              src={"/image/projects/paceInfosys/1.png"}
              alt="pace-infosys-image"
            />
          </Link>
          <Link href={""} id="portfolio-img" className="relative w-[300px] h-[170px]">
            <Image
              className="rounded-lg"
              fill
              src={"/image/projects/paceInfosys/2.png"}
              alt="pace-infosys-image"
            />
          </Link>
          <Link href={""} id="portfolio-img" className="relative w-[300px] h-[170px]">
            <Image
              className="rounded-lg"
              fill
              src={"/image/projects/paceInfosys/3.png"}
              alt="pace-infosys-image"
            />
          </Link>
          <Link href={""} id="portfolio-img" className="relative w-[300px] h-[170px]">
            <Image
              className="rounded-lg"
              fill
              src={"/image/projects/masterClass/4.png"}
              alt="pace-infosys-image"
            />
          </Link>
          <Link href={""} id="portfolio-img" className="relative w-[300px] h-[170px]">
            <Image
              className="rounded-lg"
              fill
              src={"/image/projects/masterClass/5.png"}
              alt="pace-infosys-image"
            />
          </Link>
          <Link href={""} id="portfolio-img" className="relative w-[300px] h-[170px]">
            <Image
              className="rounded-lg"
              fill
              src={"/image/projects/masterClass/6.png"}
              alt="pace-infosys-image"
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProjectCard;
