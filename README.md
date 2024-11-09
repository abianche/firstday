# First Day

[![Run Tests](https://github.com/abianche/firstday/actions/workflows/test.yml/badge.svg)](https://github.com/abianche/firstday/actions/workflows/test.yml)
[![Run Lint](https://github.com/abianche/firstday/actions/workflows/lint.yml/badge.svg)](https://github.com/abianche/firstday/actions/workflows/lint.yml)
[![Vercel](https://img.shields.io/badge/deploy-Vercel-success?logo=vercel)](https://vercel.com/alessios-projects-25412396/firstday)


An onboarding app and training platform for your employees.

Latest deployment: https://firstday-nine.vercel.app/.

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