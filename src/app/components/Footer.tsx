"use client";

import React from "react";
import { FaInstagram, FaSnapchatGhost, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/viktor_srhk", icon: <FaInstagram /> },
  { label: "Snapchat", href: "https://snapchat.com/add/viktor_srhk", icon: <FaSnapchatGhost /> },
  { label: "X", href: "https://x.com/viktor_srhk", icon: <FaTwitter /> },
  { label: "GitHub", href: "https://github.com/Vikbg", icon: <FaGithub /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/viktor_srhk", icon: <FaLinkedin /> },
];

const Footer = () => {
  return (
    <footer className="from-accent/25 via-accent/15 to-bg mt-16 flex h-150 items-end bg-linear-to-t text-(--color-card) md:h-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-12 md:grid-cols-3">
        {/* About */}
        <div className="space-y-4">
          <h3 className="text-base font-semibold tracking-wide md:text-xl">VIKTOR_SRHK</h3>
          <p className="text-xs leading-relaxed opacity-80 md:text-sm">
            Solo devlopper and creator of unique projects. Follow our elegant universe and let you
            get by our creations.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-base font-semibold tracking-wide md:text-xl">Fast Links</h3>
          <ul className="space-y-2 text-xs opacity-80 md:text-sm">
            <li>
              <a href="#projects" className="hover:text-accent transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-accent transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-accent transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social + Location */}
        <div className="space-y-4">
          <h3 className="text-base font-semibold tracking-wide md:text-xl">Follow Me</h3>
          <div className="flex gap-4">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-accent flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-lg backdrop-blur-sm transition-colors hover:text-(--color-card) md:h-10 md:w-10"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs opacity-70 md:text-sm">Lisieux, France</p>
          <p className="mt-2 text-[0.65rem] opacity-50 md:text-xs">
            © {new Date().getFullYear()} VIKTOR_SRHK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
