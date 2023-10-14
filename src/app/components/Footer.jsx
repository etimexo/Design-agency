"use client";
import React from "react";
import "../components/Footer.css";
import Link from "next/link";
import Signed from "./signed";

export default function Footer() {
  return (
    <footer>
      <div className="first">
        <p className="name">Gymian G.</p>
      </div>
      <div className="second">
        <p className="body">
          Personal Fitness Trainer + Nutritionist based in Los Angeles,
          Carlifornia.
        </p>
        <p className="under">
          <u>
            <a href="https://www.squarespace.com/" target="_blank">
              Design by SquareSpace
            </a>
          </u>
        </p>
        <p className="under">
          <u>
            <a href="https://gentledove.netlify.app" target="_blank">
              Cloned by GentleDove
            </a>
          </u>
        </p>
      </div>
      <div className="touch">
        <p className="body">Get in touch</p>
        <a href="mailto:elijahobisesan01@gmail.com" className="l">
          <u>Email</u>
        </a><br />
        <a href="#" className="l">
          <u>Signup</u>
        </a><br />
        <a href="#" className="l">
          <u>Newsletter</u>
        </a>
        <Link href="../signup">hey</Link>
      </div>
    </footer>
  );
}
