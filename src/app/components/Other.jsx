import React from "react";
import "../components/Other.css";
import Stretch from '../stretch.jpg';
import Image from "next/image";

export default function Other() {
  return (
    <section className="sec3">
      <div className="other">
      <p className="other-p">
        “I learned so much from Shayna. My excuses were stopping me from
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

            <p>
              Proper stretching and cool down routines will
              help you maximize your workouts ang get 
              noticeable results fast.
            </p>
        </div>
        
      </div>
      
    </section>
  );
}
