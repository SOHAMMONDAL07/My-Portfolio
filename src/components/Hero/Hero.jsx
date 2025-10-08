import React from "react";
import "./Hero.css";
import image from "../../assets/photo-min.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ReactTyped } from "react-typed"; // ✅ Correct import

const Hero = () => {
  return (
    <div id="Home" className="hero bg-black text-white py-16 text-center">
      <img src={image} alt="image" className="mx-auto rounded-full w-40 mb-6" />

      <h1 className="text-4xl font-bold">
        <span
          className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent inline-block"
          style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
        >
          <ReactTyped
            strings={["Hi, I’m Soham Mondal—"]}
            typeSpeed={170}
            backSpeed={170}
            backDelay={1200}
            showCursor={true}
            cursorChar="|"
            loop={true}
          />
        </span>{" "}
        a CSE student and budding developer who loves building clean, functional web apps.
      </h1>

      <p className="mt-4">
        I'm passionate about coding, exploring web technologies, and solving real-world problems with simple solutions.
      </p>

      <div className="hero-action mt-8">
        <AnchorLink
          className="anchor-link bg-pink-500 px-4 py-2 rounded text-white hover:bg-pink-600"
          offset={50}
          href="#Contact"
        >
          Contact With Me
        </AnchorLink>
        <a href="/Resume.pdf" download>
        <button className="hero-resume">
          Download Resume
        </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
