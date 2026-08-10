import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import Navbar from "./Navbar";

describe("Navbar", () => {
  it("opens the mobile navigation and closes it with Escape", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggle = screen.getByRole("button", { name: "Open navigation menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();

    await user.keyboard("{Escape}");

    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("closes the mobile navigation after selecting a section", async () => {
    const user = userEvent.setup();
    render(
      <>
        <Navbar />
        <section id="projects" />
      </>
    );

    const toggle = screen.getByRole("button", { name: "Open navigation menu" });
    await user.click(toggle);

    const mobileNavigation = screen.getByRole("navigation", { name: "Mobile navigation" });
    await user.click(within(mobileNavigation).getByRole("link", { name: "Projects" }));

    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});
