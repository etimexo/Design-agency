import React from "react";
import "./Header.css";
import Image from "next/image";
import Logo from "../logo.png";
import Team from "../team.jpg"

export default function Header() {
  return (
    <header id="#header" className="p-5">
      <nav className="navbar flex items-center shadow px-5">
        <div className="logo rounded">
          <a href="#" className="border-none">
            <Image src={Logo} alt="logo" className=" w-[70px]" />
          </a>
        </div>
        <div className="ml-auto">
          <ul className="flex">
            <li className="text-black pr-10 font-bold">
              <a className="text-center border-none" href="#">
                About
              </a>
            </li>
            <li className="text-black pr-10 font-bold">
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
        </div>
      </nav>
      <section className="sec1 text-left font-size mt-[8vh] pr-5 ">
        <h1 className="text-5xl mt-5 pt-5 pb-4 text-blue-700">
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
