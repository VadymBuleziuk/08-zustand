# NoteHub — Notes & State Management (Next.js)

A **Next.js / React / TypeScript** training project from my GoIT Full Stack coursework. It demonstrates note browsing, routing, creating notes, and preserving an unfinished form draft using Zustand.

**[Deployment link](https://08-zustand-seven-eta.vercel.app)** · [My GitHub profile](https://github.com/VadymBuleziuk)

## Features and concepts

- Notes list and detail routes
- Search, tag filtering, and pagination
- Note creation form with client-side input validation
- Route-based and modal UI flows
- A **Zustand store** that persists an unfinished note draft
- Asynchronous requests and cache invalidation with TanStack Query

## Tech stack

Next.js · React · TypeScript · Zustand · TanStack Query · Axios · CSS Modules

## Run locally

1. Clone this repository.
2. Run `npm install`.
3. Configure access to the training API using the environment variables expected by the code.
4. Run `npm run dev` and open `http://localhost:3000`.

This project uses the GoIT training API. Its current code uses a `NEXT_PUBLIC_` variable for an API token, so **do not use a sensitive production credential there**. The deployment has not been independently tested as part of this README update.

## Project context

This is a **learning project**, not a commercial application. It demonstrates routing, asynchronous data, and state management. For a real business website I developed, visit **[Fiori di Zefiro](https://www.fiori-di-zefiro.it)**.

---

**Developer:** [Vadym Buleziuk](https://github.com/VadymBuleziuk) · [LinkedIn](https://www.linkedin.com/in/vadym-buleziuk/)
