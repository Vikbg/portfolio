import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Services from "./Services";

describe("Services", () => {
  it("shows clear starting prices, deliverables, and calls to action", () => {
    render(<Services />);

    expect(screen.getByText("Starting at $10")).toBeVisible();
    expect(screen.getByText("Starting at $75")).toBeVisible();
    expect(screen.getAllByRole("link", { name: /view service/i })).toHaveLength(2);
    expect(
      screen.queryByText(/automaticaly|autamatisation|usefull|custome|finnaly/i)
    ).not.toBeInTheDocument();
  });
});
