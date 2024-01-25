# Portfolio Website

This is a portfolio website built with [Astro](https://astro.build/). It's using a combination of static Astro components and React components.

## Stack

- [Astro](https://astro.build/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [SCSS](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Project Structure

- `frontend/`: This directory contains all the source code for the website.
  - `src/`: This directory contains the Astro components, styles, and other assets for the website.
    - `components/`: Contains Astro and React components, and also SCSS modules.
    - `styles/`: This directory contains global styles for the website.
    - `pages/`: Contains the pages of the website.
  - `public/`: This directory contains static assets that are copied to the root of the built site.
  - `astro.config.mjs`: This file contains the configuration for Astro.
  - `tailwind.config.mjs`: This file contains the configuration for Tailwind CSS.
- `.github/workflows/astro.yml`: This file defines a GitHub Actions workflow for building and deploying the website.

Note: I've added the frontend folder in case I want to add backend in the future


## Development

To start the development server, run the following command:

```sh
npm run dev
```

To build the website for production:
```sh
npm run build
```

## Deployment
This website is deployed to GitHub Pages using a GitHub Actions workflow defined in `.github/workflows/astro.yml.`