# Aether AI Platform

Aether AI is a next-generation platform for deploying and managing autonomous AI agents. Built for modern enterprises, it provides a seamless interface to build, deploy, and scale intelligent workflows.

## 🚀 Features

- **Agent Management**: Create, configure, and monitor autonomous agents with specific rules and workflows.
- **Role-Based Access Control (RBAC)**: Secure access with defined roles (Admin/User).
- **Responsive Dashboard**: Beautiful, mobile-friendly admin interface powered by Tailwind CSS and Radix UI.
- **Marketing Site**: Highly optimized, animated landing pages to convert visitors into customers.
- **Authentication**: Secure JWT-based authentication using NextAuth.js.
- **SEO Ready**: Auto-generated sitemaps, robots.txt, and robust OpenGraph metadata.

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.7 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: shadcn/ui (Radix Primitives)
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: NextAuth.js (v5)

## 📦 Getting Started

### Prerequisites

- Node.js 18.17 or later
- MongoDB Cluster URI

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/manojhegde2001/aether-ai.git
   cd aether-ai-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables. Create a `.env` file in the root:
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.a25pxh4.mongodb.net/aether-ai
   AUTH_SECRET=your_super_secret_key_here
   NEXTAUTH_URL=http://localhost:3000
   ```

4. Seed the database with test accounts (optional):
   ```bash
   node scripts/seed.js
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

## 🔑 Test Credentials

After running the seed script, you can test the application using:

- **Admin Account**: `admin@aether.ai` / `Password123!`
- **User Account**: `user@aether.ai` / `Password123!`

## 🤖 AI Usage Disclosure

This project was developed with the assistance of an advanced AI coding assistant to accelerate the implementation of standard boilerplate, UI scaffolding, and basic CRUD operations, while strictly adhering to best practices and the required architectural guidelines.
