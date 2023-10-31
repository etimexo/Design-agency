import React from "react";
import Image from "next/image";
import Booking1 from "../components/Booking1";
import Header from "../components/Header";
import "../signup.css";
import S1 from "../s1.jpg";
import Process from "../components/Process";

export default function page() {
  return (
    <section className="sign-up">
      <Header />
      <h1>GET BACK ON TRACK</h1>
      <Image src={S1} alt="a female trainee" className="s1" />
      <p>
        By applying my methods and setting your goals, you&apos;ll realize how
        manageable and natural each step becomes.
      </p>
      <a href="#">
        <button className="sign-btn2">SCHEDULE YOUR FIRST SESSION</button>
      </a>
      <Process />
      {/* <Booking1 /> */}
    </section>
  );
}
