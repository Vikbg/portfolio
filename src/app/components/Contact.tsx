"use client";

import React from "react";
import {
  FaInstagram,
  FaSnapchatGhost,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

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
    <section
      id="contact"
      className="py-20 px-6 sm:px-12 bg-bg text-text min-h-screen"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-12">
        {/* Title Section */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-6xl font-light tracking-tight mb-4">
            Let&apos;s Connect
          </h2>
          <div className="w-20 h-px bg-white/20"></div>
        </div>

        <div className="grid grid-rows-1 lg:grid-row-2 gap-16 items-center justify-center">
          {/* Left Side - Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 space-y-12">
            <div>
              <div>
                <p className="text-md sm:text-lg leading-relaxed text-gray-300 font-light mb-8">
                  I&apos;m always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
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
                    <h3 className="text-xs sm:text-sm uppercase tracking-wide opacity-70 mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:viktorsrhk@gmail.com"
                      className="text-md sm:text-lg hover:opacity-70 transition-opacity"
                    >
                      viktorsrhk@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
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
                    <h3 className="text-xs sm:text-sm uppercase tracking-wide opacity-70 mb-1">
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
          <div className="grid grid-rows-2 gap-3.5 mt-5">
            <div className="flex justify-center">
              <p className="text-center text-base lg:text-lg text-stone-500">
                <span className="text-lg lg:text-2xl text-stone-50">
                  Join me on my socials networks!
                </span>
                <br />
                And let&apos;s create a project together. Contribute on our Github&apos;s
                repo.
                <br />
                <span className="text-stone-200">Join</span>.{" "}
                <span className="text-stone-200">Chat</span>.{" "}
                <span className="text-stone-200">Share</span>.{" "}
                <span className="text-stone-200">Build Together</span>.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm bg-white/10 border border-white/10 text-(--color-primary-dark) hover:bg-(--color-primary) hover:text-(--color-card) transition-colors text-2xl"
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
