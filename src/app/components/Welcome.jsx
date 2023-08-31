import React from "react";
import Image from "next/image";
import "../components/Welcome.css";
import MainImg from "../main.jpg";

export default function Welcome() {
  return (
    <div>
      <nav>
        <div className="d">
          <a href="#" className="blog-link nav-link">
            Blog
          </a>
          <a href="#" className="contact-link nav-link">
            Contact
          </a>
        </div>

        <a href="#">
          <div className="logo">Gyme</div>
        </a>

        <div className="toggler">
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <a className="desktop" href="#">
          <button className="sign-btn">SIGN UP</button>
        </a>

        <ul className="navmenu">
          <a href="#">
            <button className="sign-btn">SIGN UP</button>
          </a>
        </ul>
      </nav>
      <section className="sec1">
        <h1>
          Personal Trainer + Nutritionist with over 15 years of experience.
        </h1>
        <Image className="main-img" src={MainImg} alt="an instructor" />
        <h3>
          Strenth training, boxing, yoga, spin, cross country running and more.
          I&apos;m not picky as long as it gets you moving and sweating.
        </h3>
      </section>
    </div>
  );
}
