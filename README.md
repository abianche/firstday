# First Day

[![Tests](https://github.com/abianche/firstday/actions/workflows/test.yml/badge.svg)](https://github.com/abianche/firstday/actions/workflows/test.yml)
[![Lint](https://github.com/abianche/firstday/actions/workflows/lint.yml/badge.svg)](https://github.com/abianche/firstday/actions/workflows/lint.yml)
[![CPD](https://github.com/abianche/firstday/actions/workflows/cpd.yml/badge.svg)](https://github.com/abianche/firstday/actions/workflows/cpd.yml)
![Vercel](https://img.shields.io/github/deployments/abianche/firstday/production?style=flat&logo=vercel&label=Vercel)
![Dependabot](https://img.shields.io/badge/Dependabot-active-success?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCA1NCIgZmlsbD0iI2ZmZiI%2BPHBhdGggZD0iTTI1IDNhMSAxIDAgMCAwLTEgMXY3YTEgMSAwIDAgMCAxIDFoNXYzSDZhMyAzIDAgMCAwLTMgM3YxMkgxYTEgMSAwIDAgMC0xIDF2MTBhMSAxIDAgMCAwIDEgMWgydjZhMyAzIDAgMCAwIDMgM2g0MmEzIDMgMCAwIDAgMy0zdi02aDJhMSAxIDAgMCAwIDEtMVYzMWExIDEgMCAwIDAtMS0xaC0yVjE4YTMgMyAwIDAgMC0zLTNIMzNWNGExIDEgMCAwIDAtMS0xaC03em0tMy45ODIgMjZhMS4yMSAxLjIxIDAgMCAxIC44MzcuMzU1bDEuMjkgMS4yOWExLjIxIDEuMjEgMCAwIDEgMCAxLjcwOSAxLjIxIDEuMjEgMCAwIDEgMCAuMDAxbC02LjI5MSA2LjI5YTEuMjEgMS4yMSAwIDAgMS0xLjcxIDBsLTMuNzktMy43OTFhMS4yMSAxLjIxIDAgMCAxIDAtMS43MWwxLjI5LTEuMjlhMS4yMSAxLjIxIDAgMCAxIDEuNzEgMEwxNiAzMy41bDQuMTQ1LTQuMTQ1YTEuMjEgMS4yMSAwIDAgMSAuODczLS4zNTV6bTE5Ljk2MiAwYTEuMjEgMS4yMSAwIDAgMSAuODc0LjM1NGwxLjI5IDEuMjlhMS4yMSAxLjIxIDAgMCAxIDAgMS43MWwtNi4yOSA2LjI4OXYuMDAyYTEuMjEgMS4yMSAwIDAgMS0xLjcxMSAwbC0zLjc5LTMuNzlhMS4yMSAxLjIxIDAgMCAxIDAtMS43MWwxLjI5LTEuMjlhMS4yMSAxLjIxIDAgMCAxIDEuNzEgMGwxLjY0NSAxLjY0NSA0LjE0Ny00LjE0NkExLjIxIDEuMjEgMCAwIDEgNDAuOTggMjl6Ii8%2BPC9zdmc%2B&label=Dependabot)

An onboarding app and training platform for your employees.

### ⚠️ **UNDER INITIAL DEVELOPMENT** ⚠️

🚧 **First Day is a work in progress!** 🚧  
We are actively building the foundation of this project, and it is not yet ready for production use.  

### What does this mean?
- 🔧 Features are incomplete and may change frequently.
- ❗ Breaking changes can occur as we iterate.
- 🐛 Bugs and unexpected behavior should be expected.

We appreciate your patience as we work toward our first stable release.  
Stay tuned for updates and feel free to follow our progress or submit ideas in the [Issues](https://github.com/abianche/firstday/issues) section.

## Getting Started

This is a [Next.js](https://nextjs.org/) project deployed on [Vercel](https://vercel.com/) with a PostgreSQL database using [Drizzle ORM](https://orm.drizzle.com/). The project is containerized using Docker and Docker Compose to streamline development and deployment.

### Requirements

- [Docker](https://www.docker.com/) (v20.10 or higher)
- [Docker Compose](https://docs.docker.com/compose/) (v1.29 or higher)
- [Node.js](https://nodejs.org/) (if you plan to run scripts locally)

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
