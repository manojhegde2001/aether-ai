# Aether AI Architecture

## Overview
Aether AI is built as a monolithic Next.js application utilizing the App Router. The stack is designed for scale, performance, and developer velocity.

## Tech Stack
- **Frontend**: Next.js (React), Tailwind CSS, Framer Motion, shadcn/ui
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **ORM/ODM**: Mongoose
- **Auth**: NextAuth.js

## Folder Structure
```
src/
├── app/                 # Next.js App Router (Pages, Layouts, API Routes)
│   ├── (auth)/          # Authentication routes (login, register)
│   ├── (marketing)/     # Landing page, services, about (public)
│   ├── dashboard/       # Protected dashboard routes
│   └── api/             # RESTful API endpoints
├── components/          # Reusable UI components
│   ├── ui/              # Base UI components (shadcn)
│   ├── marketing/       # Marketing specific components
│   └── dashboard/       # Dashboard specific components
├── lib/                 # Utility functions and configs (db, utils)
├── models/              # Mongoose database schemas
└── auth.ts              # NextAuth configuration
```

## Database Design
### User Schema
- `name`: String
- `email`: String (Unique)
- `password`: String (Hashed)
- `role`: Enum ['USER', 'ADMIN']

### Agent Schema
- `name`: String
- `description`: String
- `category`: String
- `status`: Enum ['ACTIVE', 'INACTIVE']
- `owner`: ObjectId (ref: 'User')

## Authentication Flow
1. User submits credentials via `/login`.
2. NextAuth `credentials` provider validates against MongoDB.
3. A JWT is issued and stored in an HTTP-only cookie.
4. Next.js Middleware (`src/proxy.ts`) intercepts requests to `/dashboard` and validates the session/role.

## Trade-offs & Decisions
- **MongoDB over PostgreSQL**: Selected for flexible schema design which is advantageous when dealing with varied Agent configurations.
- **App Router over Pages Router**: Leverages React Server Components for better performance and simplified data fetching on the server.
- **shadcn/ui**: Avoids heavy UI library dependencies by copying components directly into the codebase, allowing full customization.

## Future Improvements
- Implement Redis for caching API responses and rate limiting.
- Separate the backend into microservices as agent processing load increases.
- Add WebSockets for real-time agent status updates on the dashboard.
