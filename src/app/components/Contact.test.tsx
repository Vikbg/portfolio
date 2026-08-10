import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Contact from "./Contact";
import Footer from "./Footer";
import Viktor from "./Viktor";

describe("public contact surfaces", () => {
  it("exposes professional profiles without Instagram or Snapchat", () => {
    render(
      <>
        <Contact />
        <Footer />
        <Viktor />
      </>
    );

    expect(screen.queryAllByRole("link", { name: "Instagram" })).toHaveLength(0);
    expect(screen.queryAllByRole("link", { name: "Snapchat" })).toHaveLength(0);
    expect(screen.getAllByRole("link", { name: "GitHub" }).length).toBeGreaterThan(0);
  });
});
