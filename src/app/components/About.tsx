"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const About = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: "power3.out" }
    );
  }, []);

  return (
    <div id="about" className="flex min-h-screen items-center justify-center px-8 py-20 text-white">
      <div className="max-w-3xl text-center">
        <h2 ref={titleRef} className="mb-6 text-3xl font-light tracking-wide sm:text-5xl">
          VIKTOR_SRHK - About Me
        </h2>

        <p ref={textRef} className="text-md leading-relaxed font-light text-gray-300 sm:text-lg">
          Ambitious full-stack developer passionate about digital creation and modern technologies.
          Always striving for excellence, I build elegant, high-performance, and future-oriented
          projects. At just 15 years old, I am already shaping my vision: a blend of discipline,
          aesthetics, and innovation.
        </p>
      </div>
    </div>
  );
};

export default About;
