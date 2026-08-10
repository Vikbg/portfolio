import { render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import Projects from "./Projects";

describe("Projects", () => {
  afterEach(() => vi.restoreAllMocks());

  it("renders projects without React's unique-key warning", () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => undefined);

    render(<Projects />);

    const output = consoleError.mock.calls.flat().join(" ");
    expect(output).not.toContain('Each child in a list should have a unique "key" prop');
  });
});
