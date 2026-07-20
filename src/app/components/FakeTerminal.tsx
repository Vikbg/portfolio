"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FakeTerminalProps = {
  lines: string[];
};

const FakeTerminal: React.FC<FakeTerminalProps> = ({ lines }) => {
  const terminalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!terminalRef.current) return;

    gsap.fromTo(
      terminalRef.current,
      { opacity: 0, y: 20, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: terminalRef.current,
          start: "top 80%", // déclenche quand le terminal entre dans le viewport
        },
      }
    );
  }, []);

  return (
    <div
      ref={terminalRef}
      className="w-full overflow-hidden rounded-xl p-4 font-mono text-[0.6rem] leading-relaxed backdrop-blur sm:text-sm"
    >
      <pre className="whitespace-pre-wrap">
        {lines.map((line, i) => (
          <React.Fragment key={i}>
            <span dangerouslySetInnerHTML={{ __html: line }} />
            <br />
          </React.Fragment>
        ))}
      </pre>
    </div>
  );
};

export default FakeTerminal;
