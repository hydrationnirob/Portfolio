import React from "react";
import { Image } from "react-bootstrap";
import { ReactTyped } from "react-typed";
import BannerImg from "../../assets/img/hero-bg.jpg";
export default function Banner() {
  return (
    <div className="banner_block">
      <Image src={BannerImg} className="bannerImg" />
      <div className="banner_info">
        <h1 className="fs-1">Md Rakibul Haque Sardar</h1>
        <ReactTyped
          className="text-info fs-1 fw-bold"
          strings={[
            "Expertise in Flutter",
            "Problem Solver",
            "Full Stack Software Developer",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
        <span className="banner_desc">
        Driven to create innovative mobile applications using Flutter. Experienced in building responsive and user-friendly interfaces. Committed to delivering high-quality code and enhancing user experiences with every project.
        </span>
      </div>
    </div>
  );
}
