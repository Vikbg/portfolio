# Portfolio Credibility and Accessibility Design

## Goal

Polish the portfolio's credibility, mobile usability, accessibility, metadata, and development quality without changing its established dark minimalist visual identity or the visible project-card layout.

## Scope

This pass fixes the requested audit items:

- Remove the React list-key warning.
- Correct visible English copy errors throughout the site.
- Add mobile navigation while preserving the desktop navigation.
- Clarify service deliverables, pricing, and calls to action.
- Repair the ESLint workflow.
- Increase small footer touch targets.
- Respect reduced-motion preferences in GSAP and smooth-scroll behavior.
- Replace inappropriate website-navigation menu roles with native semantics.
- Correct the canonical Open Graph URL and add a social-preview image.
- Remove the portfolio project's unsupported blog claim.
- Reduce exposed personal social profiles by removing Instagram and Snapchat while retaining X, GitHub, LinkedIn, the current email, and the portrait.
- Modernize `FakeTerminal` internally while preserving its current rendered size, typography, colors, line content, and entrance-animation character.

The stronger hero, new project screenshots/demos, and broader page-layout changes are explicitly outside this pass.

## Design

### Project rendering and copy

`Projects` will use the required project title as its list key instead of optional `href`. Project titles are unique in the local dataset, including the private MatchDay entry with no link.

Visible copy will be rewritten in natural English. Services will describe concrete deliverables rather than hypothetical examples, the footer and contact copy will use first-person language consistently, and the Portfolio entry will describe only features that exist. Existing technical claims will not be expanded without evidence.

### Navigation

Desktop links retain their present alignment, typography, spacing, hover underline, and breakpoint. Below the `md` breakpoint, the navbar will expose a clearly labeled menu button and a compact dropdown containing the same destinations. The control will expose its expanded state, the menu will close after navigation, and Escape will close it. Standard list and link semantics replace `menubar` and `menuitem` roles.

### Services

Service data will use a single human-readable price label such as `Starting at $10` instead of an ambiguous two-value array. Each card will keep its current border, spacing, typography hierarchy, and two-column desktop layout. The icon-only dollar CTA will become a labeled `View service` link with an external-link icon. Copy will define what is delivered without promising an unsupported turnaround time.

### FakeTerminal

Terminal content will move from HTML-bearing strings to structured line segments with a small fixed set of presentation tones. `FakeTerminal` will render ordinary React text nodes, eliminating `dangerouslySetInnerHTML`, and will use stable segment keys derived from line and segment positions because terminal lines are static ordered output.

The component will keep its existing outer classes, responsive font sizing, wrapping, and tone colors. GSAP setup will be scoped to the component and reverted during cleanup. With `prefers-reduced-motion: reduce`, the terminal renders immediately in its final visible state instead of animating or waiting for a scroll trigger.

### Accessibility and privacy

The About animation will use the same reduced-motion policy and scoped cleanup. Smooth-scrolling controls will use instant navigation for users requesting reduced motion. Global CSS will disable smooth scroll under the reduced-motion media query.

Footer social links will be at least 44 by 44 CSS pixels on mobile. Instagram and Snapchat will be removed from Contact and Footer. The portrait card's Instagram pill will become a GitHub pill, preserving its layout while pointing to a professional profile.

### Metadata and tooling

Root metadata will use `https://vikbg.github.io/portfolio/` as its base, canonical URL, and Open Graph URL. The existing 1440 by 1440 portrait will be declared as the Open Graph and Twitter image with descriptive alternative text. GitHub Pages' `/portfolio` base path remains unchanged.

`eslint-config-next` will be aligned with installed Next.js 16.3.0, and ESLint will be pinned to the latest compatible 9.x release because the installed React lint plugin calls a rule-context API removed by ESLint 10. No lint rules will be disabled to hide the crash.

## Testing and verification

Focused tests will cover the behaviors that can regress:

- Project data has unique, nonempty titles and contains no HTML terminal payloads.
- Terminal structured content renders as text without injected markup.
- Mobile navigation reports and changes its expanded state and closes after selection or Escape.
- Service cards expose readable price and CTA text.
- Public social-link surfaces omit Instagram and Snapchat.
- Reduced-motion paths do not create GSAP animations.

Tests will be written before the corresponding production changes and observed failing for the expected reason. Final verification will run the focused test suite, `pnpm lint`, TypeScript checking, the production build, and a development-server/browser smoke check at mobile and desktop widths with console output inspected for the original React warning.

## Git checkpoints

The deleted audit artifacts, this design, implementation plan, dependency/test setup, functional changes, and final polish will be committed in separate focused commits. Every checkpoint remains locally reversible with Git; no history rewriting or destructive reset is part of this work.
