import React, { useState, useEffect } from "react";
import "./intro.css";

const Intro = () => {
  const [animate, setAnimate] = useState(false);
  const text = "Web Developer".split("").map((letter, index) => {
    // jsx doesn't support html entities (&nbsp;) https://shripadk.github.io/react/docs/jsx-gotchas.html
    const content = letter === " " ? "\u00A0" : letter;

    return (
      <span
        style={{ transitionDelay: `${index * 200}ms` }}
        className="letter"
        key={index}
      >
        {content}
      </span>
    );
  });

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-i">Hello, my name is</h2>
          <h2 className="intro-name">Thallia Salbego</h2>
          <h3
            className={[
              "intro-title animated-text",
              animate ? "animate" : "",
            ].join(" ")}
          >
            {text}
          </h3>
          <div className="intro-description">
            Self-taught and self-motivated developer eager to grow and learn.
            Passionate about web development and technology.
          </div>
        </div>
      </div>

      <div className="intro-right">
        <div className="intro-bg"></div>
        {/* <img src="" alt="" className="intro-img" /> */}
      </div>
    </div>
  );
};

export default Intro;
