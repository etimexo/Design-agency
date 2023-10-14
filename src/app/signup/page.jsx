import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import "../signup.css";
import S1 from "../s1.jpg";

export default function page() {
  return (
    <section className="sign-up">
      <Header />
      <h1>GET BACK ON TRACK</h1>
      <Image src={S1} alt="a female trainee" className="s1" />
      <h1>
        By applying my methods and setting your goals, you&apos;ll realize how
        manageable and natural each step becomes.
      </h1>
      <a className="desktop" href="#">
        <button className="sign-btn">SCHEDULE YOUR FIRST SESSION</button>
      </a>
    </section>
  );
}
