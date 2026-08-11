export type TerminalTone = "prompt" | "command" | "muted" | "connected" | "info" | "success";

export type TerminalSegment = {
  text: string;
  tone?: TerminalTone;
};

export type TerminalLine = {
  segments: TerminalSegment[];
};

export type Project = {
  title: string;
  status: string;
  tags: string[];
  terminalOutput?: TerminalLine[];
  description: string;
  label: string;
  href?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "MatchDay",
    status: "In Progress",
    tags: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Twilio", "SaaS"],
    description:
      "MatchDay is a SaaS for amateur sports clubs that simplifies match-day logistics. Coaches, club managers, and parents coordinate attendance, carpooling, and reminders from one shared space, so every player gets to the match without the usual message-thread chaos.",
    terminalOutput: [
      {
        segments: [
          { text: "viktor_srhk@pop-os", tone: "prompt" },
          { text: ":~/matchday$" },
          { text: " pnpm dev", tone: "command" },
        ],
      },
      { segments: [{ text: "> MatchDay dev", tone: "muted" }] },
      { segments: [{ text: "> next dev --turbopack", tone: "muted" }] },
      {
        segments: [
          {
            text: "Match-day workspace ready for clubs, coaches, and parents.",
            tone: "info",
          },
        ],
      },
      {
        segments: [
          {
            text: "Carpool coordination, secure reminders, and subscriptions in development.",
            tone: "success",
          },
        ],
      },
    ],
    label: "MatchDay is currently in private development",
  },
  {
    title: "CoreServe",
    status: "In Progress",
    tags: ["Node.js", "Express", "MariaDB", "Redis", "JWT", "API"],
    description:
      "CoreServe is a modular Node.js backend starter for building structured REST APIs. It includes JWT authentication, API key authorization, plan-based rate limiting, MariaDB integration, Redis-backed caching with graceful fallback, and Jest/Supertest coverage for core HTTP flows.",
    terminalOutput: [
      {
        segments: [
          { text: "viktor_srhk@pop-os", tone: "prompt" },
          { text: ":~/CoreServe$" },
          { text: " pnpm dev", tone: "command" },
        ],
      },
      { segments: [{ text: "> CoreServe@1.0.1 dev", tone: "muted" }] },
      { segments: [{ text: "> NODE_ENV=dev node index.js", tone: "muted" }] },
      {
        segments: [
          { text: "[11:42:11] Redis connected successfully.", tone: "connected" },
        ],
      },
      {
        segments: [
          {
            text: "11:42:11 [INFO] CoreServe started at http://localhost:3002",
            tone: "info",
          },
        ],
      },
      {
        segments: [
          { text: "11:42:11 [OK] MariaDB connection pool ready.", tone: "success" },
        ],
      },
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
      {
        segments: [
          { text: "viktor_srhk@pop-os", tone: "prompt" },
          { text: ":~/robotic-arm-control$" },
          {
            text: " arduino-cli compile --fqbn arduino:avr:uno arduino/robotic_arm",
            tone: "command",
          },
        ],
      },
      {
        segments: [
          { text: "Sketch uses 9886 bytes (30%) of program storage space.", tone: "muted" },
        ],
      },
      {
        segments: [
          { text: "Global variables use 762 bytes (37%) of dynamic memory.", tone: "muted" },
        ],
      },
      {
        segments: [{ text: "Mode: NUNCHUCK | SERIAL | DEMO | REPLAY", tone: "info" }],
      },
      {
        segments: [{ text: "Serial diagnostics ready at 115200 baud.", tone: "success" }],
      },
    ],
    label: "Robotic Arm Control on GitHub",
    href: "https://github.com/Vikbg/robotic-arm-control",
  },
  {
    title: "Function Derivator",
    status: "Done",
    tags: ["Rust", "Parser", "AST", "CLI", "Symbolic Math"],
    description:
      "Symbolic differentiation engine in Rust. Parses expressions to an AST, applies differentiation and simplification rules, and exposes a concise CLI. Supports arithmetic, trigonometric and exponential functions, chain/product/quotient/power rules, and basic simplifications.",
    terminalOutput: [
      {
        segments: [
          { text: "viktor_srhk@pop-os", tone: "prompt" },
          { text: ":~/function-derivator$" },
          { text: ' cargo run -- "sin(x^2)"', tone: "command" },
        ],
      },
      { segments: [{ text: "f(x)  = sin(x^2)", tone: "muted" }] },
      { segments: [{ text: "f'(x) = 2x * cos(x^2)", tone: "muted" }] },
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
      {
        segments: [
          { text: "viktor_srhk@pop-os", tone: "prompt" },
          { text: ":~/small-engine$" },
          { text: " cmake --build build", tone: "command" },
        ],
      },
      { segments: [{ text: "[build] Compiling engine sources", tone: "muted" }] },
      { segments: [{ text: "[build] Linking small-engine", tone: "muted" }] },
      { segments: [{ text: "OpenGL + SDL3 window ready.", tone: "info" }] },
      { segments: [{ text: "OBJ model loading and lights enabled.", tone: "success" }] },
    ],
    label: "Small Engine on GitHub",
    href: "https://github.com/Vikbg/small-engine",
  },
  {
    title: "Portfolio",
    status: "This Site",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    description:
      "Personal portfolio website built with Next.js and Tailwind CSS. Showcases projects, services, and contact information; includes CI and deployment configuration. Source for this site is available in the repository.",
    terminalOutput: [
      {
        segments: [
          { text: "viktor_srhk@pop-os", tone: "prompt" },
          { text: ":~/portfolio$" },
          { text: " pnpm build && pnpm start", tone: "command" },
        ],
      },
      { segments: [{ text: "> Building with Next.js", tone: "muted" }] },
      {
        segments: [{ text: "Server listening on http://localhost:3000", tone: "info" }],
      },
    ],
    label: "Portfolio on GitHub",
    href: "https://github.com/Vikbg/portfolio",
  },
];

export default projects;
