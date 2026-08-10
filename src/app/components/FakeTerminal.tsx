"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { TerminalLine, TerminalTone } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

type FakeTerminalProps = { lines: TerminalLine[] };

const toneClasses: Record<TerminalTone, string> = {
  prompt: "text-green-300 drop-shadow-[0_0_6px_rgba(0,255,100,0.7)]",
  command: "text-cyan-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.7)]",
  muted: "text-gray-300",
  connected: "text-green-400 drop-shadow-[0_0_8px_rgba(0,255,120,0.6)]",
  info: "text-blue-300 drop-shadow-[0_0_6px_rgba(100,150,255,0.7)]",
  success: "text-emerald-300 drop-shadow-[0_0_6px_rgba(0,255,200,0.7)]",
};

const FakeTerminal: React.FC<FakeTerminalProps> = ({ lines }) => {
  const terminalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!terminalRef.current) return;

    const terminal = terminalRef.current;
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(terminal, { opacity: 1, y: 0, filter: "blur(0px)" });
    });

    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        terminal,
        { opacity: 0, y: 20, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: terminal,
            start: "top 80%",
          },
        },
      );
    });

    return () => media.revert();
  }, []);

  return (
    <div
      ref={terminalRef}
      role="region"
      aria-label="Terminal output"
      className="w-full overflow-hidden rounded-xl p-4 font-mono text-[0.6rem] leading-relaxed backdrop-blur sm:text-sm"
    >
      <pre className="whitespace-pre-wrap">
        {lines.map((line, lineIndex) => (
          <span className="block" key={lineIndex}>
            {line.segments.map((segment, segmentIndex) => (
              <span
                className={segment.tone ? toneClasses[segment.tone] : undefined}
                key={segmentIndex}
              >
                {segment.text}
              </span>
            ))}
          </span>
        ))}
      </pre>
    </div>
  );
};

export default FakeTerminal;
