import { describe, expect, it } from "vitest";

import projects from "./projects";

describe("project data", () => {
  it("provides unique nonempty titles for stable rendering", () => {
    const titles = projects.map(project => project.title.trim());

    expect(titles.every(Boolean)).toBe(true);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("stores terminal output as text segments instead of HTML", () => {
    const segments = projects.flatMap(project =>
      (project.terminalOutput ?? []).flatMap(line => line.segments)
    );

    expect(segments.length).toBeGreaterThan(0);
    expect(segments.every(segment => !/<\/?[a-z][^>]*>/i.test(segment.text))).toBe(true);
  });
});
