import React from "react";
import ScrollToButton from "./ScrollToButton";

const Hero = () => {
  // Hero is a server component; interactive scrolling is delegated
  // to the client-side `ScrollToButton` component.

  return (
    <header
      id="hero"
      className="relative flex h-screen w-full flex-col items-center p-8 text-white"
      role="banner"
    >
      <div className="absolute top-[30%] max-sm:text-center md:left-[25%] lg:left-1/2 lg:-translate-x-1/2">
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-6xl">VIKTOR_SRHK here !</h1>

        <p className="mt-2 max-w-md text-sm sm:text-base lg:text-lg">
          I am glad to have you here. Explore my projects and get in touch!
        </p>
      </div>

      {/* Anchor link ensures the section is discoverable by crawlers and works without JS.
          onClick enables smooth scroll when JS is available. */}
      <nav aria-label="Primary actions" className="mt-auto mb-8">
        <ScrollToButton
          targetId="projects"
          className="inline-flex -translate-y-8 items-center justify-center rounded-full bg-white/10 p-3 hover:bg-white/20 focus:ring-2 focus:ring-white focus:outline-none sm:-translate-y-5"
          ariaLabel="Scroll to My Projects section"
        >
          <span className="sr-only">My Projects</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ScrollToButton>
      </nav>
    </header>
  );
};

export default Hero;
