import React from "react";
import Link from "next/link";
import "./Cta.css";
import Backward from "../backward.jpg";

export default function Cta() {
  return (
    <div className="back-bg">
      <p className="h">INTRESTED?</p>
      <p className="h2">
        Get in touch. <br />
        The first workout&apos;s on me.
      </p>
      <Link href="../signup"><button className="lets">Let&apos;s do this</button></Link>
      {/* hey */}
    </div>
  );
}
