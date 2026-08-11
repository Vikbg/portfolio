"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const About = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set([titleRef.current, textRef.current], { opacity: 1, y: 0 });
    });

    media.add("(prefers-reduced-motion: no-preference)", () => {
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
    });

    return () => media.revert();
  }, []);

  return (
    <div id="about" className="flex min-h-screen items-center justify-center px-8 py-20 text-white">
      <div className="max-w-3xl text-center">
        <h2 ref={titleRef} className="mb-6 text-3xl font-light tracking-wide sm:text-5xl">
          VIKTOR_SRHK - About Me
        </h2>

        <p ref={textRef} className="text-md leading-relaxed font-light text-gray-300 sm:text-lg">
          Hi, I&apos;m Viktor, a 15-year-old student and developer from France.
          <br className="mb-2" />
          I&apos;m passionate about programming, artificial intelligence, embedded systems,
          mathematics, and physics. I love understanding how things work, whether it&apos;s a neural
          network, a mathematical theorem, a robot arm, or a low-level system written in Rust.
          <br className="mb-2" />
          Most of my time is spent building projects, learning new technologies, and challenging
          myself with increasingly complex problems. I&apos;m currently exploring web development,
          backend systems, electronics, robotics, and AI while also trying to share my knowledge
          through private tutoring in mathematics and science.
          <br className="mb-2" />
          My goal is to pursue a preparatory class and then an engineering school, specializing in
          AI and embedded systems. Beyond that, I want to build impactful products, launch my own
          ventures, and keep pushing my limits every day.
        </p>
      </div>
    </div>
  );
};

export default About;
