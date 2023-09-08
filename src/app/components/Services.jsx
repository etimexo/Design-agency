import React from "react";
import Image from "next/image";
import "../components/Services.css";

export default function Services() {
  return (
    <section className="sec2">
      <h4>SERVICES</h4>
      <div className="grid">
        <div className="grid-item">
          <p className="head">Personal Training</p>
          <p className="body">
            Individual and small group sessions that are designed to work every
            minor muscle group, plus cardio traning.
          </p>
        </div>
        <div className="grid-item">
          <p className="head">Nutrition</p>
          <p className="body">
            Exercise is only one facet of a healthy lifestyle. I&apos;ll help
            you make good choices when you eat so you can have more energy
            throughout the day.
          </p>
        </div>
        <div className="grid-item">
          <p className="head">Physical Health</p>
          <p className="body">
            Whether you&apos;re suffering from chronic condition or just looking
            to achieve peak performance, I can point you to experts who can
            help.
          </p>
        </div>
        <div className="grid-item">
          <p className="head">Customized Plan</p>
          <p className="body">
            Sometimes all you need is the instruction manual. Let me design a
            total fitness plan that will help you reach your goals.
          </p>
        </div>
      </div>
      <button className="sign-btn2">SIGN UP</button>
    </section>
  );
}
