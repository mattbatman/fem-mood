# Mood

This is the example application created by following along with [Build an AI-Powered Fullstack Next.js App, v3](https://frontendmasters.com/courses/fullstack-app-next-v3/) on *Frontend Masters* by Scott Moss.

It's a Next.js application that uses Clerk for authentication.

## Getting Started

```
npm install
```

Create an account and new application at [Clerk](https://dashboard.clerk.com/).

Copy `.env.example` as `.env.local`.

Enter your public and secret key from your application dashboard page at Clerk.

```
npm run dev
```

The database is managed by [PlanetScale](https://planetscale.com/). You will need to create an account and a database at PlanetScale. For this tutorial, I created a database called `mood`.

The CLI for PlanetScale can be installed with [these directions](https://github.com/planetscale/cli#installation).

After installing, the CLI was used to authenticate with PlanetScale, create a new branch for the database (`dev`), and start the database locally:

```
pscale auth login
pscale branch create mood dev
pscale connect mood dev --port 3309
```

After making changes via Prisma, the database at PlanetScale can be updated with:
```
npx prisma db push
```