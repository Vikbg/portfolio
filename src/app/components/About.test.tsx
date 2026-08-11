import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import About from "./About";

describe("About", () => {
  it("renders final visible content when reduced motion is requested", () => {
    vi.mocked(window.matchMedia).mockImplementation(query => ({
      matches: query === "(prefers-reduced-motion: reduce)",
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    render(<About />);

    expect(screen.getByRole("heading", { name: /about me/i })).toHaveStyle({ opacity: "1" });
    expect(screen.getByText(/15-year-old student/i)).toHaveStyle({ opacity: "1" });
  });
});
