import React from "react";
import "./Header.css";
import Image from "next/image";
import Logo from "../logo.png";
import Team from "../team.jpg"

export default function Header() {
  return (
    <header className="p-5">
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
              <a className="text-center border-none" href="#">
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
        <h1 className="">
          Enhance a healthier you: Overcome your fears with our support!
        </h1>
        <p>
          Welcome to our empowering fitness community, where we believe that
          true transformation happens when you step outside your comfort zone.
          Are your fears holding you back from achieving your fitness goals? It
          is time to break free from those limitations and embark on a journey
          of self-discovery and growth.
        </p>
      </section>
      <section className="mt-0 h-[80vh] flex items-center sec2 px-5">
        <div className="text-xl w-[45%]">
        <h1 className="text-blue-600 text-6xl">
          Let us help you!
        </h1> <br />
        Our dedicated team of experienced trainers is here to guide you every
        step of the way. Whether you&apos;re nervous about stepping into the gym for
        the first time, trying a new workout routine, or pushing yourself to new
        limits, we&apos;re here to provide the encouragement and expertise you need.
        We understand that everyone&apos;s journey is unique, and we&apos;re committed to
        creating a safe and inclusive environment where you can thrive.
        </div>
        <Image className="w-[50%] ml-auto h-[85%] rounded-2xl border-4 border-blue-500 team-img" src={Team} alt="set of instructors" />
      </section>
      {/* <Image src={Bg} alt="gyming woman" /> */}
    </header>
  );
}
