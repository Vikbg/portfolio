import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import ScrollToButton from "./ScrollToButton";

describe("ScrollToButton", () => {
  it("scrolls without animation when reduced motion is requested", async () => {
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
    const user = userEvent.setup();
    render(
      <>
        <ScrollToButton targetId="projects">Projects</ScrollToButton>
        <section id="projects" />
      </>
    );

    await user.click(screen.getByRole("link", { name: "Projects" }));

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "auto" });
  });
});
