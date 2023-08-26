import React from "react";
import "./Header.css";
import Image from "next/image";
import Logo from "../logo.png";
import Team from "../team.jpg";
import Bgmobile from "../bghomemobile.png";
import Toggleimg from "../toggleimg.png";
import Arrow from "../arrowdown.png";

export default function Header() {
  return (
    <header id="#header" className="change p-5">
      <nav className="navbar shadow">
        <div className="logo rounded">
          <a href="#" className="border-none">
            <Image src={Logo} alt="logo" className=" w-[70px]" />
          </a>
        </div>
        <div className=" toggler">
          <Image className="toggleimg" src={Toggleimg} alt="Toggler icon" />
        </div>
        <ul className="navmenu md:flex">
          <li className="text-black pr-10 font-bold">
            <a className="text-center border-none" href="#">
              About
            </a>
          </li>
          <li className="text-black md:pr-10 font-bold">
            <a className="text-center border-none" href="#services">
              Services
            </a>
          </li>
          <li className="text-black pr-10 font-bold">
            <a className="text-center border-none" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="arrowdown">
        <Image className="arrowd arra" src={Arrow} alt="arrow-down icon" />
      </div>
      {/* <Image src={Bgmobile} alt="Background image for mobile screen" /> */}

      <section className="sec1 text-left font-size mt-[8vh] ">
        <h1 className=" py-5 text-white">
          Unlock Your Potential, Elevate Your Fitness!
        </h1>
        <p className="text-white">
          Elevate your fitness and unveil a new you! Join us in embracing a
          transformative journey that ignites potential and surpasses limits.
          Let&apos;s sculpt a stronger, healthier version of yourself together.
          Explore more to start your transformation
        </p>
        <a href="#services">
          {" "}
          <button className="mt-[5vh] btn btn1">Learn more</button>
        </a>
        <a href="#signup">
          {" "}
          <button className="btn btn2">Get started</button>
        </a>
      </section>
    </header>
  );
}
