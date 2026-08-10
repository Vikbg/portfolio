import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import FakeTerminal from "./FakeTerminal";

describe("FakeTerminal", () => {
  it("renders structured terminal segments as ordinary text", () => {
    render(
      <FakeTerminal
        lines={[
          {
            segments: [
              { text: "user@host", tone: "prompt" },
              { text: " npm run dev", tone: "command" },
            ],
          },
        ]}
      />
    );

    const terminal = screen.getByRole("region", { name: "Terminal output" });
    expect(terminal).toHaveTextContent("user@host npm run dev");
    expect(terminal.querySelector("script")).not.toBeInTheDocument();
  });

  it("renders its final visible state when reduced motion is requested", () => {
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

    render(
      <FakeTerminal lines={[{ segments: [{ text: "Ready", tone: "success" }] }]} />
    );

    expect(screen.getByRole("region", { name: "Terminal output" })).toHaveStyle({
      opacity: "1",
    });
  });
});
