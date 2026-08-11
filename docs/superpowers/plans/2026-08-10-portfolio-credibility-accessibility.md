# Portfolio Credibility and Accessibility Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix the requested credibility, mobile-navigation, service, accessibility, privacy, metadata, terminal, and lint issues while preserving the portfolio's current visual identity.

**Architecture:** Keep the existing page and card composition, but replace HTML-bearing terminal data with typed display segments and isolate interactive behavior inside the existing client components. Add a lightweight Vitest/jsdom component-test layer so each behavior change is locked down before implementation.

**Tech Stack:** Next.js 16.3.0, React 19.2.7, TypeScript 6.0.3, Tailwind CSS 4.3.1, GSAP 3.14.1, Vitest 4.1.10, Testing Library 16.3.2, ESLint 9.39.5

## Global Constraints

- Preserve the current dark minimalist visual identity and visible project-card layout.
- Preserve FakeTerminal's current rendered size, typography, colors, line content, and entrance-animation character.
- Keep the existing portrait and email; remove Instagram and Snapchat from public contact surfaces.
- Keep GitHub Pages deployment under `/portfolio`.
- Do not add the stronger hero, project screenshots/demos, or broad layout redesigns in this pass.
- Commit every checkpoint locally; do not rewrite Git history.

---

### Task 1: Compatible lint and component-test toolchain

**Files:**
- Modify: `package.json`
- Modify: `pnpm-lock.yaml`
- Create: `vitest.config.mts`
- Create: `src/test/setup.ts`

**Interfaces:**
- Produces: `pnpm test`, `pnpm test:run`, and `pnpm typecheck` scripts used by later tasks.
- Produces: a jsdom test environment with `@testing-library/jest-dom/vitest` matchers and deterministic `matchMedia`, `scrollIntoView`, and `scrollTo` browser shims.

- [ ] **Step 1: Align the lint dependency graph and install the test harness**

Run:

```bash
pnpm add -D eslint@^9.39.5 eslint-config-next@16.3.0 vitest@^4.1.10 jsdom@^30.0.1 @testing-library/react@^16.3.2 @testing-library/jest-dom@^7.0.1 @testing-library/user-event@^14.6.3
```

This is approved tool configuration, not production behavior. ESLint stays on 9.x because `eslint-plugin-react@7.37.5` calls the rule-context API removed by ESLint 10.

- [ ] **Step 2: Add exact package scripts**

Add these entries to `scripts` in `package.json`:

```json
"test": "vitest",
"test:run": "vitest run",
"typecheck": "tsc --noEmit"
```

- [ ] **Step 3: Configure Vitest**

Create `vitest.config.mts`:

```ts
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
  },
});
```

- [ ] **Step 4: Add browser shims**

Create `src/test/setup.ts`:

```ts
import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

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
```

- [ ] **Step 5: Verify the repaired base toolchain**

Run: `pnpm lint && pnpm typecheck && pnpm test:run --passWithNoTests`

Expected: all three commands exit 0; ESLint no longer crashes in `react/display-name`.

- [ ] **Step 6: Commit**

```bash
git add package.json pnpm-lock.yaml vitest.config.mts src/test/setup.ts
git commit -m "test: add compatible lint and component harness"
```

### Task 2: Structured and motion-safe FakeTerminal

**Files:**
- Create: `src/app/components/FakeTerminal.test.tsx`
- Create: `src/data/projects.test.ts`
- Create: `src/data/projects.ts`
- Modify: `src/app/components/FakeTerminal.tsx`
- Modify: `src/app/components/ProjectCard.tsx`
- Delete: `src/data/projects.json`

**Interfaces:**
- Produces: `TerminalTone = "prompt" | "command" | "muted" | "info" | "success"`.
- Produces: `TerminalSegment = { text: string; tone?: TerminalTone }`.
- Produces: `TerminalLine = { segments: TerminalSegment[] }`.
- `FakeTerminal` consumes `lines: TerminalLine[]`.
- `ProjectCard` consumes optional `terminalOutput?: TerminalLine[]`.

- [ ] **Step 1: Write the failing project-data test**

Create `src/data/projects.test.ts`:

```ts
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
    expect(segments.every(segment => !/[<>]/.test(segment.text))).toBe(true);
  });
});
```

- [ ] **Step 2: Run the data test and observe RED**

Run: `pnpm test:run src/data/projects.test.ts`

Expected: FAIL because current terminal lines are HTML strings and have no `segments` property.

- [ ] **Step 3: Write the failing terminal rendering test**

Create `src/app/components/FakeTerminal.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import FakeTerminal from "./FakeTerminal";

describe("FakeTerminal", () => {
  it("renders structured terminal segments as ordinary text", () => {
    render(
      <FakeTerminal
        lines={[{ segments: [{ text: "user@host", tone: "prompt" }, { text: " npm run dev", tone: "command" }] }]}
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
    render(<FakeTerminal lines={[{ segments: [{ text: "Ready", tone: "success" }] }]} />);
    expect(screen.getByRole("region", { name: "Terminal output" })).toHaveStyle({ opacity: "1" });
  });
});
```

- [ ] **Step 4: Run the component test and observe RED**

Run: `pnpm test:run src/app/components/FakeTerminal.test.tsx`

Expected: FAIL because `FakeTerminal` still passes line objects to `dangerouslySetInnerHTML`.

- [ ] **Step 5: Convert terminal data and render typed segments**

Export the interfaces above from `FakeTerminal.tsx`, map tones to the existing Tailwind color/drop-shadow classes, give the terminal container `role="region"` and `aria-label="Terminal output"`, and render each line as a block of text segments. Replace `projects.json` with `projects.ts`, type its default export as `Project[]`, and convert every `terminalOutput` string to this shape:

```ts
{
  "segments": [
    { "text": "viktor_srhk@pop-os", "tone": "prompt" },
    { "text": ":~/matchday$" },
    { "text": " pnpm dev", "tone": "command" }
  ]
}
```

Move the shared `Project` interface to `src/data/projects.ts`, import `TerminalLine` as a type, and have `ProjectCardProps` extend that interface so project data is checked at its source.
Update `Projects.tsx` to import `@/data/projects` instead of the deleted JSON module.

Use `gsap.matchMedia()` with separate reduced and non-reduced branches. The reduced branch must call `gsap.set(element, { opacity: 1, y: 0, filter: "blur(0px)" })`; the non-reduced branch retains the existing `fromTo` values and ScrollTrigger start. Return `matchMedia.revert()` from the effect.

- [ ] **Step 6: Use typed data in ProjectCard**

Import `type Project` into `ProjectCard.tsx`, use it as the component props contract, and keep the terminal JSX location and classes unchanged.

- [ ] **Step 7: Run GREEN tests and static checks**

Run: `pnpm test:run src/data/projects.test.ts src/app/components/FakeTerminal.test.tsx && pnpm lint && pnpm typecheck`

Expected: all commands exit 0.

- [ ] **Step 8: Commit**

```bash
git add src/data/projects.ts src/data/projects.json src/data/projects.test.ts src/app/components/FakeTerminal.tsx src/app/components/FakeTerminal.test.tsx src/app/components/ProjectCard.tsx src/app/components/Projects.tsx
git commit -m "refactor: modernize project terminal rendering"
```

### Task 3: Stable project keys and accessible mobile navigation

**Files:**
- Create: `src/app/components/Projects.test.tsx`
- Create: `src/app/components/Navbar.test.tsx`
- Modify: `src/app/components/Projects.tsx`
- Modify: `src/app/components/Navbar.tsx`

**Interfaces:**
- `Navbar` exposes a button named `Open navigation menu`/`Close navigation menu` with `aria-expanded` and `aria-controls="mobile-navigation"`.
- Mobile navigation contains Home, About, Projects, and Contact links and closes after link selection or Escape.

- [ ] **Step 1: Write the failing project-key regression test**

Create `src/app/components/Projects.test.tsx`:

```tsx
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
```

- [ ] **Step 2: Run the key test and observe RED**

Run: `pnpm test:run src/app/components/Projects.test.tsx`

Expected: FAIL because MatchDay produces an undefined fragment key.

- [ ] **Step 3: Fix the list key**

Change the fragment key in `Projects.tsx` from `project.href` to `project.title`.

- [ ] **Step 4: Write failing mobile-navigation behavior tests**

Create `src/app/components/Navbar.test.tsx`:

```tsx
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
    render(<><Navbar /><section id="projects" /></>);
    const toggle = screen.getByRole("button", { name: "Open navigation menu" });
    await user.click(toggle);
    const mobileNavigation = screen.getByRole("navigation", { name: "Mobile navigation" });
    await user.click(within(mobileNavigation).getByRole("link", { name: "Projects" }));
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});
```

- [ ] **Step 5: Run the navbar tests and observe RED**

Run: `pnpm test:run src/app/components/Navbar.test.tsx`

Expected: FAIL because no mobile menu button exists.

- [ ] **Step 6: Implement the mobile menu and native semantics**

Use `useState(false)` and a document `keydown` effect scoped to the open state. Keep the current desktop list under `hidden md:flex`; remove `menubar`, `menuitem`, `role="none"`, and redundant link `aria-label` attributes. Add an `md:hidden` icon button and an absolutely positioned, bordered, dark translucent mobile navigation panel using the existing links and scroll handler. Close the panel before scrolling.

- [ ] **Step 7: Run GREEN tests and static checks**

Run: `pnpm test:run src/app/components/Projects.test.tsx src/app/components/Navbar.test.tsx && pnpm lint && pnpm typecheck`

Expected: all commands exit 0.

- [ ] **Step 8: Commit**

```bash
git add src/app/components/Projects.tsx src/app/components/Projects.test.tsx src/app/components/Navbar.tsx src/app/components/Navbar.test.tsx
git commit -m "fix: add accessible mobile portfolio navigation"
```

### Task 4: Clear services and professional social surfaces

**Files:**
- Create: `src/app/components/Services.test.tsx`
- Create: `src/app/components/Contact.test.tsx`
- Modify: `src/app/components/Services.tsx`
- Modify: `src/app/components/ServiceCard.tsx`
- Modify: `src/app/components/Contact.tsx`
- Modify: `src/app/components/Footer.tsx`
- Modify: `src/app/components/Viktor.tsx`

**Interfaces:**
- `ServiceCard` replaces `price: string[]` with `priceLabel: string`.
- Every service exposes visible `View service` CTA text.
- Public social surfaces expose only X, GitHub, and LinkedIn; the portrait card links to GitHub.

- [ ] **Step 1: Write failing service tests**

Create `src/app/components/Services.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Services from "./Services";

describe("Services", () => {
  it("shows clear starting prices, deliverables, and calls to action", () => {
    render(<Services />);
    expect(screen.getByText("Starting at $10")).toBeVisible();
    expect(screen.getByText("Starting at $75")).toBeVisible();
    expect(screen.getAllByRole("link", { name: /view service/i })).toHaveLength(2);
    expect(screen.queryByText(/automaticaly|autamatisation|usefull|custome|finnaly/i)).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run service tests and observe RED**

Run: `pnpm test:run src/app/components/Services.test.tsx`

Expected: FAIL on readable pricing, CTA text, and misspellings.

- [ ] **Step 3: Implement service content and CTA**

Use these service titles, price labels, descriptions, and tags:

```ts
{
  title: "Automation Scripts",
  priceLabel: "Starting at $10",
  description: "A custom script that removes repetitive manual work, such as organizing files, processing data, or connecting everyday tools. You receive the script, setup instructions, and a tested example for your workflow.",
  tags: ["automation", "scripting", "productivity", "custom workflow"]
}
{
  title: "Landing Page",
  priceLabel: "Starting at $75",
  description: "A responsive custom landing page that presents your business, product, or event clearly. You receive the page, mobile-friendly styling, and deployment-ready source code.",
  tags: ["landing page", "responsive", "custom design", "deployment ready"]
}
```

Change `ServiceCard` to render `priceLabel` directly and replace the icon-only square link with an inline-flex `View service` CTA that retains the current translucent background and hover colors. Use `FaArrowUpRightFromSquare` as a decorative icon.

- [ ] **Step 4: Write failing professional-social test**

Create `src/app/components/Contact.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Contact from "./Contact";
import Footer from "./Footer";
import Viktor from "./Viktor";

describe("public contact surfaces", () => {
  it("exposes professional profiles without Instagram or Snapchat", () => {
    render(<><Contact /><Footer /><Viktor /></>);
    expect(screen.queryByRole("link", { name: "Instagram" })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Snapchat" })).not.toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "GitHub" }).length).toBeGreaterThan(0);
  });
});
```

- [ ] **Step 5: Run the social test and observe RED**

Run: `pnpm test:run src/app/components/Contact.test.tsx`

Expected: FAIL because Instagram and Snapchat are currently rendered.

- [ ] **Step 6: Remove personal social links and polish visible copy**

Remove Instagram and Snapchat imports/data from Contact and Footer. Replace Viktor's Instagram pill with a GitHub pill linking to `https://github.com/Vikbg`. Rewrite contact copy to `Join me on social media!` and `Let's create something together, contribute to one of my GitHub repositories, or start a new project.` Rewrite footer copy to `Independent developer building thoughtful software across web, backend, robotics, and developer tools.` Keep the existing layout classes.

- [ ] **Step 7: Increase footer touch targets**

Change footer social anchor sizing from `h-7 w-7 md:h-10 md:w-10` to `h-11 w-11`; preserve the remaining visual treatment.

- [ ] **Step 8: Run GREEN tests and static checks**

Run: `pnpm test:run src/app/components/Services.test.tsx src/app/components/Contact.test.tsx && pnpm lint && pnpm typecheck`

Expected: all commands exit 0.

- [ ] **Step 9: Commit**

```bash
git add src/app/components/Services.tsx src/app/components/Services.test.tsx src/app/components/ServiceCard.tsx src/app/components/Contact.tsx src/app/components/Contact.test.tsx src/app/components/Footer.tsx src/app/components/Viktor.tsx
git commit -m "fix: clarify services and professional contact links"
```

### Task 5: Reduced motion, metadata, and remaining copy

**Files:**
- Create: `src/app/layout.test.ts`
- Create: `src/app/metadata.ts`
- Create: `src/app/components/About.test.tsx`
- Modify: `src/app/components/About.tsx`
- Modify: `src/app/components/ScrollToButton.tsx`
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`
- Modify: `src/data/projects.ts`
- Modify: `src/app/components/Hero.tsx`

**Interfaces:**
- Root metadata resolves canonical and Open Graph URLs to `https://vikbg.github.io/portfolio/`.
- Open Graph and Twitter metadata expose `/logo.webp` with alt text `Portrait of Viktor`.
- Motion-sensitive users receive final visible GSAP states and instant scroll behavior.

- [ ] **Step 1: Write the failing metadata test**

Create `src/app/layout.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { siteMetadata } from "./metadata";

describe("portfolio metadata", () => {
  it("describes the deployed portfolio and its social preview", () => {
    expect(siteMetadata.metadataBase?.href).toBe("https://vikbg.github.io/portfolio/");
    expect(siteMetadata.alternates?.canonical).toBe("/");
    expect(siteMetadata.openGraph && "url" in siteMetadata.openGraph ? siteMetadata.openGraph.url : undefined).toBe("/");
    expect(siteMetadata.openGraph && "images" in siteMetadata.openGraph ? siteMetadata.openGraph.images : undefined).toEqual(
      expect.arrayContaining([expect.objectContaining({ url: "/logo.webp", alt: "Portrait of Viktor" })])
    );
  });
});
```

- [ ] **Step 2: Run the metadata test and observe RED**

Run: `pnpm test:run src/app/layout.test.ts`

Expected: FAIL because metadata currently points to GitHub and has no image.

- [ ] **Step 3: Correct metadata**

Move the metadata object to `src/app/metadata.ts` as `export const siteMetadata: Metadata`, then re-export it from layout with `export const metadata = siteMetadata`. Add `metadataBase`, `alternates.canonical`, and portrait image objects. Set Open Graph `url: "/"`; include width/height 1440 and `alt: "Portrait of Viktor"`. Add the same image to Twitter metadata and keep the existing descriptive title/description.

- [ ] **Step 4: Make remaining motion motion-safe**

First create `src/app/components/About.test.tsx`:

```tsx
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
```

Run `pnpm test:run src/app/components/About.test.tsx` and observe RED against the current animation.

Refactor About's effect to use `gsap.matchMedia()` and return `revert()`. In the reduced branch, set both refs to their final visible positions; in the default branch, retain current timings and easing. In `ScrollToButton`, read `window.matchMedia("(prefers-reduced-motion: reduce)").matches` and pass `behavior: reduceMotion ? "auto" : "smooth"`. Add this CSS:

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

- [ ] **Step 5: Correct remaining visible copy**

Change `VIKTOR_SRHK here !` to `VIKTOR_SRHK here!`. Change the Portfolio description to `Personal portfolio website built with Next.js and Tailwind CSS. Showcases projects, services, and contact information; includes CI and deployment configuration. Source for this site is available in the repository.` Format About's JSX consistently without changing its meaning.

- [ ] **Step 6: Run GREEN tests and the copy scan**

Run:

```bash
pnpm test:run src/app/layout.test.ts src/app/components/About.test.tsx
rg -n "automaticaly|autamatisation|usefull|custome|finnaly|socials networks|devlopper|more better|Github's|blog posts|here !" src
```

Expected: metadata test exits 0; `rg` returns exit 1 with no matches.

- [ ] **Step 7: Run static checks and commit**

Run: `pnpm lint && pnpm typecheck && git diff --check`

Expected: all commands exit 0.

```bash
git add src/app/layout.tsx src/app/layout.test.ts src/app/metadata.ts src/app/globals.css src/app/components/About.tsx src/app/components/About.test.tsx src/app/components/ScrollToButton.tsx src/app/components/Hero.tsx src/data/projects.ts
git commit -m "fix: improve portfolio metadata and motion accessibility"
```

### Task 6: Full verification and final checkpoint

**Files:**
- Modify only files required to correct verification failures caused by this implementation.

**Interfaces:**
- Consumes every earlier task's scripts and behavior contracts.
- Produces a clean, reversible final commit and verification evidence.

- [ ] **Step 1: Run the complete automated suite**

Run: `pnpm test:run && pnpm lint && pnpm typecheck && pnpm build:pages && git diff --check`

Expected: every command exits 0 with no test failures, lint errors, type errors, or build errors.

- [ ] **Step 2: Run a development-server smoke check**

Start: `pnpm dev --hostname 127.0.0.1 --port 3000`

Inspect the home page at desktop and mobile widths. Verify the original React key warning is absent from server/browser console output, desktop navigation is unchanged, mobile navigation opens/closes and reaches sections, terminals contain their full text without blank scroll-capture states, service CTAs are readable, and no horizontal overflow appears.

- [ ] **Step 3: Review the final change set**

Run:

```bash
git status --short
git diff HEAD~5 --stat
git log --oneline -8
```

Confirm all requested areas are represented and no unrelated source files changed.

- [ ] **Step 4: Commit any verification-only correction**

If Step 1 or Step 2 required a correction, stage only that correction and its regression test, then commit:

```bash
git commit -m "fix: resolve portfolio verification findings"
```

If no correction was required, do not create an empty commit.
