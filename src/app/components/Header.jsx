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
    <header id="#header" className="p-5">
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
        <h1 className=" mt-5 py-5 text-blue-700">
          Enhance a healthier you: Overcome your fears with our support!
        </h1>
        <p className="text-slate-800">
          Welcome to our empowering fitness community, where we believe that
          true transformation happens when you step outside your comfort zone.
          Are your fears holding you back from achieving your fitness goals? It
          is time to break free from those limitations and embark on a journey
          of self-discovery and growth.
        </p>
      </section>
      
    </header>
  );
}
