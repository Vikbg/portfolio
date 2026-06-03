"use client"

import React from "react";

type ScrollToButtonProps = React.PropsWithChildren<{
  targetId: string;
  className?: string;
  ariaLabel?: string;
}>;

const ScrollToButton: React.FC<ScrollToButtonProps> = ({ targetId, className, ariaLabel, children }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = 0;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = Math.max(elementPosition - headerOffset, 0);

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    } else {
      // fallback to anchor behavior
      window.location.hash = `#${targetId}`;
    }
  };

  return (
    // keep href for accessibility / non-JS fallbacks
    <a href={`#${targetId}`} className={className} onClick={handleClick} aria-label={ariaLabel}>
      {children}
    </a>
  );
};

export default ScrollToButton;
