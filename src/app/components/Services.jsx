import React from "react";
import "./Services.css";
import Image from "next/image";
import Team from "../team.jpg";

export default function Services() {
  return (
    <section id="services" className="sec3 px-5">
      <div className="mt-0 h-[80vh] sec2 px-5">
        <div className="text-xl">
          <h1 className="text-blue-600 text-6xl">
            Let us help you!
          </h1> <br />
          <p className="text-slate-800">
          <Image
          className="m rounded-2xl border-4 border-blue-600 team-img"
          src={Team}
          alt="set of instructors"
        />
            Our dedicated team of experienced trainers is here to guide you
            every step of the way. Whether you&apos;re nervous about stepping
            into the gym for the first time, trying a new workout routine, or
            pushing yourself to new limits, we&apos;re here to provide the
            encouragement and expertise you need. We understand that
            everyone&apos;s journey is unique, and we&apos;re committed to
            creating a safe and inclusive environment where you can thrive.
          </p>
        </div>
        <Image
          className="d rounded-2xl border-4 border-blue-600 team-img"
          src={Team}
          alt="set of instructors"
        />
        
      </div>
      
    </section>
  );
}
