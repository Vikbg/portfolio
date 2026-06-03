"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  const links = [
    { href: "#", label: "Home", afterWidth: "w-9.5" },
    { href: "#about", label: "About", afterWidth: "w-9.5" },
    { href: "#projects", label: "Projects", afterWidth: "w-13" },
    { href: "#contact", label: "Contact", afterWidth: "w-12.5" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav id="navbar" className="text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.label} className="relative">
              <Link
                href={link.href}
                scroll={false} // Important pour ne pas faire de scroll automatique par Next.js
                className={`after:content-[''] after:w-0 hover:after:${link.afterWidth} after:h-0.5 after:block after:bg-white after:absolute after:transition-all hidden md:block opacity-80 text-sm cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out w-max hover:-translate-0.5`}
                onClick={(e) => link.href !== "#" && handleScroll(e, link.href)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;