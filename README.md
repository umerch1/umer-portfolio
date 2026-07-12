# Umer's Portfolio

A modern personal portfolio built with Next.js, TypeScript, and Tailwind CSS showcasing projects, blog posts, skills, and contact information.

## Overview

This repository contains a responsive, accessible portfolio website designed to highlight work, articles, and professional skills. It uses Next.js App Router, Tailwind CSS, and a small set of custom components in the `components/` directory.

## Features

- Clean, responsive design
- Project showcase with image galleries
- Blog listing and individual post pages
- Contact form and resume page
- Dark / light theme toggle
- Reusable UI components and utility hooks

## Technologies

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- pnpm for package management

## Project Structure (high level)

- `app/` — Next.js routes and page layouts
- `components/` — Reusable UI and page components
- `public/images/` — Project and blog images
- `styles/` — Global styles
- `lib/` — Site data and utility helpers
- `hooks/` — Custom React hooks

## Getting Started

Install dependencies and run the development server:

```bash
pnpm install
pnpm dev
```

Build for production and preview the production build:

```bash
pnpm build
pnpm start
```

## Deployment

This project can be deployed to Vercel or any platform that supports Next.js. If deploying to Vercel, the platform will detect the Next.js app and configure builds automatically.

## How to Update Content

- Projects and blog data are stored in `lib/data.ts` — update that file to add or change items.
- Pages are inside the `app/` directory — edit or add route folders for new pages.

## Contributing

If you'd like to suggest improvements, open an issue or submit a pull request. For small changes, updating content in `lib/data.ts` or adding a new component in `components/` is a good start.

## Contact

Use the contact page in the site (`/contact`) to get in touch or update the contact component in `components/contactComponent/contactForm.tsx`.

## License

This project is released under the MIT License. Replace or update the license text as desired.

---

Made with ❤️ — feel free to ask me to tailor this README for resumes, GitHub, or a project landing page.