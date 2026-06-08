# Aether AI Platform

**AI Agents That Actually Get Work Done**

Aether AI is a premium, enterprise-grade SaaS platform that allows users to deploy autonomous, intelligent AI agents for customer support, sales, research, and workflow automation.

## Features

- **Marketing Website**: High-conversion landing pages with premium design and animations.
- **Authentication**: Secure role-based authentication using NextAuth.js (Auth.js) and JWT sessions.
- **Dashboard**: Role-based access control (Admin & User views).
- **Agent Management**: CRUD operations for deploying and managing AI agents.
- **User Management**: Admin interface for managing platform users.
- **Responsive Design**: Mobile-first layouts using Tailwind CSS and shadcn/ui.
- **Dark Mode**: Fully implemented dark mode using css variables.
- **Database**: MongoDB integration via Mongoose.

## Setup Instructions

### Prerequisites
- Node.js (v20+)
- MongoDB instance (local or Atlas)

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Update `.env.local` with your MongoDB URI and a secure `AUTH_SECRET`.
4. Seed the database (creates default admin and user accounts):
   ```bash
   node scripts/seed.js
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```

### Test Credentials
- **Admin**: `admin@aether.ai` | `Password123!`
- **User**: `user@aether.ai` | `Password123!`

## Deployment Steps (Vercel)

1. Push code to GitHub.
2. Import project in Vercel.
3. Add Environment Variables (`MONGODB_URI`, `AUTH_SECRET`, `NEXTAUTH_URL`).
4. Click Deploy.

Vercel will automatically detect the Next.js framework and handle the build process.
