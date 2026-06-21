"use client";

import React from "react";
import { FaInstagram, FaSnapchatGhost, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

import Viktor from "./Viktor";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/viktor_srhk",
    icon: <FaInstagram />,
  },
  {
    label: "Snapchat",
    href: "https://snapchat.com/add/viktor_srhk",
    icon: <FaSnapchatGhost />,
  },
  { label: "X", href: "https://x.com/viktor_srhk", icon: <FaTwitter /> },
  { label: "GitHub", href: "https://github.com/Vikbg", icon: <FaGithub /> },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/viktor_srhk",
    icon: <FaLinkedin />,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-bg text-text min-h-screen px-6 py-20 sm:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center space-y-12">
        {/* Title Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="mb-4 text-3xl font-light tracking-tight sm:text-4xl lg:text-6xl">
            Let&apos;s Connect
          </h2>
          <div className="h-px w-16 bg-white/20 sm:w-20"></div>
        </div>

        <div className="lg:grid-row-2 grid grid-rows-1 items-center justify-center gap-16">
          {/* Left Side - Contact Info */}
          <div className="grid grid-cols-1 space-y-12 sm:grid-cols-2">
            <div>
              <div>
                <p className="text-md mb-8 leading-relaxed font-light text-gray-300 sm:text-lg">
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities
                  to be part of your vision.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-xs tracking-wide uppercase opacity-70 sm:text-sm">
                      Email
                    </h3>
                    <a
                      href="mailto:viktorsrhk@gmail.com"
                      className="text-md transition-opacity hover:opacity-70 sm:text-lg"
                    >
                      viktorsrhk@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-xs tracking-wide uppercase opacity-70 sm:text-sm">
                      Location
                    </h3>
                    <p className="text-md sm:text-lg">Lisieux, France</p>
                  </div>
                </div>
              </div>
            </div>
            <Viktor />
          </div>
          {/* Social Icons */}
          <div className="mt-5 grid grid-rows-2 gap-3.5">
            <div className="flex justify-center">
              <p className="text-center text-base text-stone-500 lg:text-lg">
                <span className="text-lg text-stone-50 lg:text-2xl">
                  Join me on my socials networks!
                </span>
                <br />
                And let&apos;s create a project together. Contribute on our Github&apos;s repo.
                <br />
                <span className="text-stone-200">Join</span>.{" "}
                <span className="text-stone-200">Chat</span>.{" "}
                <span className="text-stone-200">Share</span>.{" "}
                <span className="text-stone-200">Build Together</span>.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-lg text-(--color-primary-dark) backdrop-blur-sm transition-colors hover:bg-(--color-primary) hover:text-(--color-card) sm:h-16 sm:w-16 sm:text-2xl"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
