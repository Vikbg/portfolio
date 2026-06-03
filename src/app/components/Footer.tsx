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
    <footer className="flex items-end mt-16 h-150 md:h-100 bg-linear-to-t from-accent/25 via-accent/15 to-bg text-(--color-card)">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* About */}
        <div className="space-y-4">
          <h3 className="text-base md:text-xl font-semibold tracking-wide">VIKTOR_SRHK</h3>
          <p className="opacity-80 text-xs md:text-sm leading-relaxed">
            Solo devlopper and creator of unique projects. Follow our elegant universe and let you get by our creations.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-base md:text-xl font-semibold tracking-wide">Fast Links</h3>
          <ul className="text-xs md:text-sm space-y-2 opacity-80">
            <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
            <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Social + Location */}
        <div className="space-y-4">
          <h3 className="text-base md:text-xl font-semibold tracking-wide">Follow Me</h3>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-10 md:h-10 w-7 h-7 rounded-lg flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-accent hover:text-(--color-card) transition-colors text-lg"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="opacity-70 text-xs md:text-sm mt-4">Lisieux, France</p>
          <p className="opacity-50 text-[0.65rem] md:text-xs mt-2">© {new Date().getFullYear()} VIKTOR_SRHK. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;