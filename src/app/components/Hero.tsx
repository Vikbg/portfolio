import React from 'react'
import ScrollToButton from './ScrollToButton'

const Hero = () => {
  // Hero is a server component; interactive scrolling is delegated
  // to the client-side `ScrollToButton` component.

  return (
    <header id="hero" className="relative text-white p-8 flex flex-col items-center w-full h-screen" role="banner">
      <div className="absolute max-sm:text-center top-[30%] md:left-[25%] lg:left-1/2 lg:-translate-x-1/2">
        <h1 className="font-bold mt-4 text-3xl sm:text-4xl lg:text-6xl">
          VIKTOR_SRHK here !
        </h1>

        <p className="mt-2 text-sm sm:text-base lg:text-lg max-w-md">
          I am glad to have you here. Explore my projects and get in touch!
        </p>
      </div>

      {/* Anchor link ensures the section is discoverable by crawlers and works without JS.
          onClick enables smooth scroll when JS is available. */}
      <nav aria-label="Primary actions" className="mt-auto mb-8">
        <ScrollToButton
          targetId="projects"
          className="-translate-y-8 sm:-translate-y-5 inline-flex items-center justify-center p-3 rounded-full bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
          ariaLabel="Scroll to My Projects section"
        >
          <span className="sr-only">My Projects</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </ScrollToButton>
      </nav>
    </header>
  )
}

export default Hero
