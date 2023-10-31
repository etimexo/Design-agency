import React from "react";
import Image from "next/image";
import Footer from "./Footer";
import Booking from "./Booking";
// import Booking1 from "./Booking1";
import "./Process.css";
import Toes from "../toes.jpg";
import Undress from "../undress.jpg";
import Seats from "../seats.jpg";
import Back2 from "../back2.jpg";
import Look from "../look.jpg";
import Drink from "../drink.jpg";

export default function Process() {
  return (
    <>
      <section className="process">
        <p className="p1">The Process is Important</p>
        <p className="p2">
          {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Et pariatur
        unde tempore sed corporis! Impedit necessitatibus molestias consequatur, <br />
        labore tempores magni nemo illum veritatis quos
        exercitationem facilisews. */}
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="images-m">
          <div className="block1">
            <Image
              src={Toes}
              className="toes"
              alt="a female athlete touching her toes"
            />
            <Image src={Seats} className="seats" alt="a stack of seats" />
            
          </div>
          <Image
              src={Drink}
              className="drink"
              alt="a picture of energy drink"
            />
            <Image
              src={Undress}
              className="undress"
              alt="an athlete taking off his shirt"
            />
            <Image
              src={Look}
              className="look"
              alt="a man looking towards the camera"
            />
            <Image
              src={Back2}
              className="back2"
              alt="a female athelete and her coach running backwards"
            />
          <div className="block2">
            {/* <Image src={Toes} className="size1" alt="athlete touching her toes"/> */}
            
            
            
          </div>
        </div>
        <div className="images-d">
          <div className="block1">
            <Image
              src={Toes}
              className="toes"
              alt="a female athlete touching her toes"
            />
            <Image src={Seats} className="seats" alt="a stack of seats" />
            <Image
              src={Drink}
              className="drink"
              alt="a picture of energy drink"
            />
          </div>
          <div className="block2">
            {/* <Image src={Toes} className="size1" alt="athlete touching her toes"/> */}
            <Image
              src={Undress}
              className="undress"
              alt="an athlete taking off his shirt"
            />
            <Image
              src={Look}
              className="look"
              alt="a man looking towards the camera"
            />
            <Image
              src={Back2}
              className="back2"
              alt="a female athelete and her coach running backwards"
            />
          </div>
        </div>
        <p className="nve">
          “I&apos;ve never been more on top of my nutritional and physical
          health than I am now.”
        </p>
        - Gymian G.
      </section>
      <Booking />
      <Footer />
    </>
  );
}
