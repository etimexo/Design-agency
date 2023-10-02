import React from "react";
import "../components/Newsletter.css";
export default function Newsletter() {
  return (
    <div className="newsletter">
      <p className="p1">Weekly Tips Straight to Your Inbox</p>
      <p className="p2">
        Sign up with your email address to receive news and updates.
      </p>
      <input type="email" name="email" placeholder="Email address" id="email" />
      <a className="" href="#">
        <button className="lets">SIGN UP</button>
      </a>
      <p className="p3">We respect your privacy.</p>
    </div>
  );
}
