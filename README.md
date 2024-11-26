# First Day

![License](https://img.shields.io/badge/license-Apache%202.0-blue)
[![Tests](https://github.com/abianche/firstday/actions/workflows/test.yml/badge.svg)](https://github.com/abianche/firstday/actions/workflows/test.yml)
[![E2E](https://github.com/abianche/firstday/actions/workflows/e2e.yml/badge.svg)](https://github.com/abianche/firstday/actions/workflows/e2e.yml)
[![Lint](https://github.com/abianche/firstday/actions/workflows/lint.yml/badge.svg)](https://github.com/abianche/firstday/actions/workflows/lint.yml)
[![CPD](https://github.com/abianche/firstday/actions/workflows/cpd.yml/badge.svg)](https://github.com/abianche/firstday/actions/workflows/cpd.yml)
[![Chromatic](https://github.com/abianche/firstday/actions/workflows/chromatic.yml/badge.svg)](https://github.com/abianche/firstday/actions/workflows/chromatic.yml)
[![Storybook](https://img.shields.io/badge/Storybook-Docs-brightgreen?logo=storybook)](https://main--674650d80fbe4280ae14b211.chromatic.com/)
![Vercel](https://img.shields.io/github/deployments/abianche/firstday/production?style=flat&logo=vercel&label=Vercel)
![Dependabot](https://img.shields.io/badge/Dependabot-active-success?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCA1NCIgZmlsbD0iI2ZmZiI%2BPHBhdGggZD0iTTI1IDNhMSAxIDAgMCAwLTEgMXY3YTEgMSAwIDAgMCAxIDFoNXYzSDZhMyAzIDAgMCAwLTMgM3YxMkgxYTEgMSAwIDAgMC0xIDF2MTBhMSAxIDAgMCAwIDEgMWgydjZhMyAzIDAgMCAwIDMgM2g0MmEzIDMgMCAwIDAgMy0zdi02aDJhMSAxIDAgMCAwIDEtMVYzMWExIDEgMCAwIDAtMS0xaC0yVjE4YTMgMyAwIDAgMC0zLTNIMzNWNGExIDEgMCAwIDAtMS0xaC03em0tMy45ODIgMjZhMS4yMSAxLjIxIDAgMCAxIC44MzcuMzU1bDEuMjkgMS4yOWExLjIxIDEuMjEgMCAwIDEgMCAxLjcwOSAxLjIxIDEuMjEgMCAwIDEgMCAuMDAxbC02LjI5MSA2LjI5YTEuMjEgMS4yMSAwIDAgMS0xLjcxIDBsLTMuNzktMy43OTFhMS4yMSAxLjIxIDAgMCAxIDAtMS43MWwxLjI5LTEuMjlhMS4yMSAxLjIxIDAgMCAxIDEuNzEgMEwxNiAzMy41bDQuMTQ1LTQuMTQ1YTEuMjEgMS4yMSAwIDAgMSAuODczLS4zNTV6bTE5Ljk2MiAwYTEuMjEgMS4yMSAwIDAgMSAuODc0LjM1NGwxLjI5IDEuMjlhMS4yMSAxLjIxIDAgMCAxIDAgMS43MWwtNi4yOSA2LjI4OXYuMDAyYTEuMjEgMS4yMSAwIDAgMS0xLjcxMSAwbC0zLjc5LTMuNzlhMS4yMSAxLjIxIDAgMCAxIDAtMS43MWwxLjI5LTEuMjlhMS4yMSAxLjIxIDAgMCAxIDEuNzEgMGwxLjY0NSAxLjY0NSA0LjE0Ny00LjE0NkExLjIxIDEuMjEgMCAwIDEgNDAuOTggMjl6Ii8%2BPC9zdmc%2B&label=Dependabot)

An onboarding app and training platform for your employees.

---

### ⚠️ **UNDER INITIAL DEVELOPMENT**

We are actively building the foundation of this project, and it is not yet ready for production use.  

### What does this mean?
- 🔧 Features are incomplete and may change frequently.
- ❗ Breaking changes can occur as we iterate.
- 🐛 Bugs and unexpected behavior should be expected.
- 📚 Any documentation found in this repository may be outdated.

We appreciate your patience as we work toward our first stable release.  
Stay tuned for updates and feel free to follow our progress or submit ideas in the [Issues](https://github.com/abianche/firstday/issues) section.

## Getting Started

This project uses [Next.js](https://nextjs.org/) for both frontend and backend development, with [Material UI](https://mui.com/) for the user interface. It connects to a [PostgreSQL](https://www.postgresql.org/) database managed with [Drizzle ORM](https://orm.drizzle.com/). Authentication is handled using [JWT](https://self-issued.info/docs/draft-ietf-oauth-json-web-token.html).

Testing is done with [Jest](https://jestjs.io/) for unit tests and [Playwright](https://playwright.dev/) for end-to-end tests. The application is deployed on [Vercel](https://vercel.com/). Logging is done with [Winston](https://github.com/winstonjs/winston).

The project is containerized with [Docker](https://www.docker.com/).

### Local setup

#### Environment Variables

Make sure to have a PostgreSQL instance up and running.

Create a `.env` file in the root of the project with the following variables:

```plaintext
# PostgreSQL Database Configuration
POSTGRES_URL=postgres://username:password@localhost:5432/database
JWT_SECRET=your_jwt_secret_here
```

Install the dependencies:

```bash
npm install
```

Push the schemas to the database:

```bash
npm run db:push
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

### Using Docker

Build and run the project with Docker Compose:

```bash
docker-compose up --build
```

Adapt your variables in `.env` and push the schemas to the database:

```bash
npm run db:push
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.
