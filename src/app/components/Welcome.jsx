import React from "react";
import Image from "next/image";
import "./Welcome.css";
import MainImg from "../main.jpg";
import Header from "./Header";

export default function Welcome() {
  return (
    <div>
      <Header />
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
