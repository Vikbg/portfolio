# Viktor's Portfolio

Personal portfolio website showcasing full-stack development projects built with modern web technologies.

## Project Overview

This is a Next.js 16 portfolio that highlights projects across multiple tech stacks including Node.js, Rust, C++, and web development. The site features smooth animations, responsive design, and project showcases with terminal-like output displays.

## Tech Stack

- **Framework**: Next.js 16.2.9 with Turbopack
- **Language**: TypeScript 6.0.3
- **Styling**: Tailwind CSS 4.3.1
- **Animations**: GSAP 3.14.1
- **Icons**: React Icons 5.6.0
- **Runtime**: Node.js 22+
- **Package Manager**: pnpm

## Project Structure

```
src/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── About.tsx       # About section with animations
│   │   ├── Contact.tsx     # Contact and social links
│   │   ├── Footer.tsx      # Page footer
│   │   ├── FakeTerminal.tsx # Terminal output display
│   │   ├── Hero.tsx        # Landing hero section
│   │   ├── Navbar.tsx      # Navigation bar
│   │   ├── ProjectCard.tsx # Individual project display
│   │   ├── Projects.tsx    # Projects section
│   │   ├── ScrollToButton.tsx # Scroll animation component
│   │   ├── ServiceCard.tsx # Service offerings display
│   │   ├── Services.tsx    # Services section
│   │   └── Viktor.tsx      # Profile component
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   └── globals.css         # Global styles
├── data/
│   └── projects.json       # Projects data
└── lib/
    └── paths.ts            # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 22 or higher
- pnpm 10 or higher

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

The app will be available at `http://localhost:3000`.

## Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Create optimized production build
- `pnpm build:pages` - Build for GitHub Pages deployment
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Deployment

### GitHub Pages

The site is configured for GitHub Pages deployment with automatic CI/CD:

```bash
# Build for GitHub Pages
pnpm build:pages
```

This sets the base path to `/portfolio` and disables Next.js image optimization.

### Vercel

Deploy directly to Vercel by connecting your repository. Vercel will automatically detect the Next.js configuration and deploy.

## Features

- Responsive design optimized for mobile and desktop
- Smooth scroll animations with GSAP
- Terminal-style project output displays
- Project data managed in JSON for easy updates
- SEO optimized with metadata and Open Graph tags
- Accessible components with ARIA labels
- 404 error page
- TypeScript strict mode enabled
- Turbopack for fast builds

## Customization

### Adding Projects

Edit `src/data/projects.json` and add new project objects following this structure:

```json
{
  "title": "Project Name",
  "status": "In Progress",
  "tags": ["Tech1", "Tech2"],
  "description": "Project description",
  "terminalOutput": ["line1", "line2"],
  "label": "Link label",
  "href": "https://github.com/..."
}
```

### Styling

The site uses Tailwind CSS. Customize the design by modifying classes in components or adjusting Tailwind config.

## Performance

- Uses Next.js App Router for optimal bundle size
- Turbopack for 5x faster builds
- Image optimization disabled for static export
- GSAP for performant animations
- Minimal dependencies

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Personal portfolio - feel free to use as inspiration but please do not republish as your own.

## Contact

Find me on:

- GitHub: [Vikbg](https://github.com/Vikbg)
- Email: viktorsrhk@gmail.com
- Location: Lisieux, France
