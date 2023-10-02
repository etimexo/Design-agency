import React from "react";
import "../components/Footer.css";

export default function Footer() {
  return (
    <footer>
      <p className="name">Gymian G.</p>
      <p className="body">
        Personal Fitness Trainer + Nutritionist based in Los Angeles,
        Carlifornia.
      </p>
      <p className="under"><u><a href="https://www.squarespace.com/" target="_blank">Design by SquareSpace</a></u></p>
      <p className="under"><u><a href="https://gentledove.netlify.app" target="_blank">Cloned by GentleDove</a></u></p>
    </footer>
  );
}
