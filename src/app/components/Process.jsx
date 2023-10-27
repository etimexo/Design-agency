import React from "react";
import Image from "next/image";
import "../components/Process.css";
import Toes from "../toes.jpg";
import Undress from "../undress.jpg";
import Seats from "../seats.jpg";
import Back2 from "../back2.jpg";
import Look from "../look.jpg";


export default function Process() {
  return (
    <section className="process">
      <p className="p1">The Process is Important</p>
      <p className="p2">
        {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Et pariatur
        unde tempore sed corporis! Impedit necessitatibus molestias consequatur, <br />
        labore tempores magni nemo illum veritatis quos
        exercitationem facilisews. */}
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className="images">
        <div className="block1">
            <Image src={Toes} className="size1" alt="athlete touching her toes"/>
            {/* <Image src={Undress} className="size2" alt="an athlete takiing off a shirt" /> */}
        </div>
        <div className="block2">
            <Image src={Toes} className="size1" alt="athlete touching her toes"/>
            <Image src={Undress} className="size2" alt="an athlete takiing off a shirt" />
        </div>
        
      </div>
    </section>
  );
}

