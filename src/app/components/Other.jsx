import React from "react";
import "./Other.css";
import Image from "next/image";
import Stretch from "../stretch.jpg";
import Sun from "../sunblock.jpg";

export default function Other() {
  return (
    <section className="sec3">
      <div className="other">
        <p className="other-p">
          “I learned so much from Gyme. My excuses were stopping me from
          sticking to a healthy eating plan and workout schedule. I&apos;ve been
          consistent with my new regimen ever since.”
        </p>
        <p>Gymian G.</p> <br /> <br />
      </div>
      <div className="vary">
        <Image src={Stretch} className="stretch" alt="woman stretching" />
        <div className="vary2">
          <p className="h">Warm Up</p>
          <p className="h">Work Out</p>
          <p className="h">Cool Down</p>
          <p className="para">
            Proper stretching and cool down routines will help you maximize your
            workouts ang get noticeable results fast.
          </p>
        </div>
      </div>
      <div className="vary3">
        <Image src={Sun} className="stretch stretch2" alt="woman stretching" />
        {/* <div className="vary2"> */}
        <div className="vary2">
          <p className="h">A Constant Source of Motivation</p>
          <p className="para">
            Think of me as your personal cheering section, helping you find the
            strength you didn&apos;t know you had. I&apos;m all about positive
            reinforcement.
          </p>
        </div>
      </div>
    </section>
  );
}
