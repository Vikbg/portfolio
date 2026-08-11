import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

const createMatchMedia = (matches: boolean) => (query: string) => ({
  matches,
  media: query,
  onchange: null,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  addListener: vi.fn(),
  removeListener: vi.fn(),
  dispatchEvent: vi.fn(),
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
  vi.mocked(window.matchMedia).mockImplementation(createMatchMedia(false));
});

Object.defineProperty(window, "matchMedia", {
  configurable: true,
  writable: true,
  value: vi.fn().mockImplementation(createMatchMedia(false)),
});

Element.prototype.scrollIntoView = vi.fn();
window.scrollTo = vi.fn();
