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
    <nav id="navbar" className="p-4 text-white" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-center">
        <ul className="flex gap-6" role="menubar">
          {links.map(link => (
            <li key={link.label} role="none">
              <Link
                href={link.href}
                scroll={false}
                className={`after:w-0 after:content-[''] hover:after:${link.afterWidth} hidden w-max cursor-pointer text-sm opacity-80 transition-all duration-300 ease-in-out after:absolute after:block after:h-0.5 after:bg-white after:transition-all hover:-translate-0.5 hover:opacity-100 md:block`}
                onClick={e => link.href !== "#" && handleScroll(e, link.href)}
                role="menuitem"
                aria-label={`Navigate to ${link.label} section`}
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
