"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { href: "#", label: "Home", afterWidth: "w-9.5" },
    { href: "#about", label: "About", afterWidth: "w-9.5" },
    { href: "#projects", label: "Projects", afterWidth: "w-13" },
    { href: "#contact", label: "Contact", afterWidth: "w-12.5" },
  ];

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setIsMobileMenuOpen(false);
    if (id === "#") return;

    e.preventDefault();
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav id="navbar" className="relative p-4 text-white" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-center">
        <ul className="hidden gap-6 md:flex">
          {links.map(link => (
            <li key={link.label}>
              <Link
                href={link.href}
                scroll={false}
                className={`after:w-0 after:content-[''] hover:after:${link.afterWidth} w-max cursor-pointer text-sm opacity-80 transition-all duration-300 ease-in-out after:absolute after:block after:h-0.5 after:bg-white after:transition-all hover:-translate-0.5 hover:opacity-100`}
                onClick={e => handleScroll(e, link.href)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20 md:hidden"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen(isOpen => !isOpen)}
        >
          {isMobileMenuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="navigation"
          aria-label="Mobile navigation"
          className="absolute top-full left-1/2 z-50 w-[min(20rem,calc(100vw-2rem))] -translate-x-1/2 rounded-xl border border-white/10 bg-black/90 p-3 shadow-2xl backdrop-blur-md md:hidden"
        >
          <ul className="space-y-1">
            {links.map(link => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  scroll={false}
                  className="block rounded-lg px-4 py-3 text-sm opacity-80 transition-colors hover:bg-white/10 hover:opacity-100"
                  onClick={e => handleScroll(e, link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
