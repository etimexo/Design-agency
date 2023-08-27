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
            <div className="logo">Gyme</div>
          </a>
        </div>
        <div className=" toggler">
          <Image className="toggleimg" src={Toggleimg} alt="Toggler icon" />
        </div>
        <ul className="navmenu md:flex">
          <li className="text-black pr-10 font-bold">
            <a id="#header" className="text-center border-none" href="#">
              Home
            </a>
          </li>
          <li className="text-black pr-10 font-bold">
            <a className="text-center border-none" href="#">
              Program
            </a>
          </li>
          <li className="text-black pr-10 font-bold">
            <a className="text-center border-none" href="#">
              Cooaches
            </a>
          </li>
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
      <section className="sec1 text-left font-size mt-[8vh] ">
        <h1 className="mt-[10vh] py-5 text-white">
          With us, you will:
        </h1>
        <p className="text-white">
          Unleash your potential <br />
          Elevate your fitness <br />
          Overcome your insecurities <br />
          And many more...

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
