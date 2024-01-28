# Daniel Fijołek Portfolio

This is the portfolio website for Daniel Fijołek. It's built with Next.js, React, and TypeScript, and supports multiple languages.

## Project Structure

- `src/app`: This directory contains the main application code.
  - `components`: This directory contains reusable components like [`LanguageSwitch`](src/app/components/LanguageSwitch.tsx), [`Skilltag`](src/app/components/Skilltag.tsx), and [`SkilltagContainer`](src/app/components/SkilltagContainer.tsx).
  - `[lang]`: This directory contains language-specific components and dictionaries for localization.
- `src/middleware.ts`: This file contains middleware for the Next.js server.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

Open http://localhost:3000 with your browser to see the result.

Building and Running in Production
To build the application, run:

Then, you can start the application in production mode with:

Please make sure to update tests as appropriate.

## License

MIT
