import React from "react";
import ProjectCard from "./ProjectCard";

const featuredProjects = [
  {
    title: "CoreServe",
    status: "In Progress",
    tags: ["Node.js", "Express", "MariaDB", "Redis", "JWT", "API"],
    description:
      "CoreServe is a modular Node.js backend starter for building structured REST APIs. It includes JWT authentication, API key authorization, plan-based rate limiting, MariaDB integration, Redis-backed caching with graceful fallback, and Jest/Supertest coverage for core HTTP flows.",
    terminalOutput: [
      `<span class="text-green-300 drop-shadow-[0_0_6px_rgba(0,255,100,0.7)]">viktor_srhk@pop-os</span>:~/CoreServe$<span class="text-cyan-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.7)]"> pnpm dev</span>`,
      `<span class="text-gray-300">> CoreServe@1.0.1 dev</span>`,
      `<span class="text-gray-300">> NODE_ENV=dev node index.js</span>`,
      `<span class="text-green-400 drop-shadow-[0_0_8px_rgba(0,255,120,0.6)]">[11:42:11] Redis connected successfully.</span>`,
      `<span class="text-blue-300 drop-shadow-[0_0_6px_rgba(100,150,255,0.7)]">11:42:11 [INFO] CoreServe started at http://localhost:3002</span>`,
      `<span class="text-emerald-300 drop-shadow-[0_0_6px_rgba(0,255,200,0.7)]">11:42:11 [OK] MariaDB connection pool ready.</span>`,
    ],
    label: "CoreServe on GitHub",
    href: "https://github.com/Vikbg/CoreServe",
  },
  {
    title: "Robotic Arm Control",
    status: "In Progress",
    tags: ["Arduino", "C++", "Robotics", "I2C", "Rust CLI", "Wokwi"],
    description:
      "A 6-DOF robotic arm control system built around an Arduino Uno and a Wii Nunchuck. The project includes live joystick and accelerometer control, serial diagnostics, per-joint limits, smoothing, demo mode, record/replay support, calibration utilities, simulation assets, and a Rust desktop CLI for sending commands.",
    terminalOutput: [
      `<span class="text-green-300 drop-shadow-[0_0_6px_rgba(0,255,100,0.7)]">viktor_srhk@pop-os</span>:~/robotic-arm-control$<span class="text-cyan-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.7)]"> arduino-cli compile --fqbn arduino:avr:uno arduino/robotic_arm</span>`,
      `<span class="text-gray-300">Sketch uses 9886 bytes (30%) of program storage space.</span>`,
      `<span class="text-gray-300">Global variables use 762 bytes (37%) of dynamic memory.</span>`,
      `<span class="text-blue-300 drop-shadow-[0_0_6px_rgba(100,150,255,0.7)]">Mode: NUNCHUCK | SERIAL | DEMO | REPLAY</span>`,
      `<span class="text-emerald-300 drop-shadow-[0_0_6px_rgba(0,255,200,0.7)]">Serial diagnostics ready at 115200 baud.</span>`,
    ],
    label: "Robotic Arm Control on GitHub",
    href: "https://github.com/Vikbg/robotic-arm-control",
  },
  {
    title: "Function Derivator",
    status: "Done",
    tags: ["Rust", "Parser", "AST", "CLI", "Symbolic Math"],
    description:
      "A symbolic differentiation engine in Rust. It parses mathematical expressions into an AST, applies differentiation rules, simplifies the result, and exposes the workflow through a CLI. It supports arithmetic operators, trigonometric and exponential functions, chain rule, product rule, quotient rule, and general power rule.",
    terminalOutput: [
      `<span class="text-green-300 drop-shadow-[0_0_6px_rgba(0,255,100,0.7)]">viktor_srhk@pop-os</span>:~/function-derivator$<span class="text-cyan-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.7)]"> cargo run -- "sin(x^2)"</span>`,
      `<span class="text-gray-300">f(x)  = sin(x^2)</span>`,
      `<span class="text-gray-300">f'(x) = cos(x^2) * 2 * x</span>`,
      `<span class="text-blue-300 drop-shadow-[0_0_6px_rgba(100,150,255,0.7)]">rules: chain, product, quotient, power</span>`,
    ],
    label: "Function Derivator on GitHub",
    href: "https://github.com/Vikbg/function-derivator",
  },
  {
    title: "Small Engine",
    status: "In Progress",
    tags: ["C++", "OpenGL", "SDL3", "GLAD", "3D Engine"],
    description:
      "A small OpenGL engine starter written in C++. It uses SDL3 for windowing, GLAD for OpenGL initialization, and tinyobjloader for model loading. The engine currently supports OBJ models with MTL textures, light sources, fullscreen toggling, and WASD/ZQSD world-space movement.",
    terminalOutput: [
      `<span class="text-green-300 drop-shadow-[0_0_6px_rgba(0,255,100,0.7)]">viktor_srhk@pop-os</span>:~/small-engine$<span class="text-cyan-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.7)]"> cmake --build build</span>`,
      `<span class="text-gray-300">[build] Compiling engine sources</span>`,
      `<span class="text-gray-300">[build] Linking small-engine</span>`,
      `<span class="text-blue-300 drop-shadow-[0_0_6px_rgba(100,150,255,0.7)]">OpenGL + SDL3 window ready.</span>`,
      `<span class="text-emerald-300 drop-shadow-[0_0_6px_rgba(0,255,200,0.7)]">OBJ model loading and lights enabled.</span>`,
    ],
    label: "Small Engine on GitHub",
    href: "https://github.com/Vikbg/small-engine",
  },
  {
    title: "Vilang",
    status: "In Progress",
    tags: ["Assembly", "Compiler", "NASM", "Linux", "ELF"],
    description:
      "Vilang is an x86-64 Linux compiler prototype written entirely in NASM assembly and linked as a static ELF. Its CLI can check source files, emit NASM assembly, build static binaries, and run generated output while the lexer, type system, borrow checker, and language semantics continue to evolve.",
    terminalOutput: [
      `<span class="text-green-300 drop-shadow-[0_0_6px_rgba(0,255,100,0.7)]">viktor_srhk@pop-os</span>:~/vilang$<span class="text-cyan-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.7)]"> ./vilang run tests/hello.vi</span>`,
      `<span class="text-gray-300">loading source file...</span>`,
      `<span class="text-gray-300">validating fn main...</span>`,
      `<span class="text-blue-300 drop-shadow-[0_0_6px_rgba(100,150,255,0.7)]">emitting NASM assembly to out.asm</span>`,
      `<span class="text-emerald-300 drop-shadow-[0_0_6px_rgba(0,255,200,0.7)]">static ELF built and executed.</span>`,
    ],
    label: "Vilang on GitHub",
    href: "https://github.com/Vikbg/vilang",
  },
];

const Projects = () => {
  return (
    <div id="projects">
      {featuredProjects.map((project, index) => (
        <React.Fragment key={project.href}>
          <ProjectCard {...project} />
          {index !== featuredProjects.length - 1 && (
            <hr className="mx-6 h-px bg-white/20 opacity-25 sm:mx-20 lg:mx-40" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Projects;
