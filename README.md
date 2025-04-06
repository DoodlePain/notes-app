# Keyless Note App

A brutalist-style note-taking application built with modern web technologies.

## 📋 Project Overview

Keyless Note App is a simple yet powerful note-taking application with a distinctive brutalist design. It combines modern web technologies to provide a seamless user experience for creating, reading, updating, and deleting notes.

## 🛠️ Technology Stack

- **Frontend**: Next.js 15 with React 19
- **UI Components**:
  - React components
  - Web Components built with Lit
- **Styling**: TailwindCSS 4
- **Database**: SQLite (via better-sqlite3)
- **Notifications**: react-toastify
- **API Optimization**: SWR for data fetching

## 🗂️ Project Structure

```md
keyless-note-app/
├── components/           # React components
├── db/                   # Database operations
├── lib/                  # Utility functions
├── pages/                # Next.js pages and API routes
│   ├── api/              # Backend API endpoints
│   └── ...               # Frontend pages
├── public/               # Static assets
├── styles/               # Global styles
├── types/                # TypeScript type definitions
└── web-components/       # Lit-based web components
```

## 🔑 Key Features

- Create, read, update, and delete notes
- Responsive brutalist design
- Real-time updates with optimistic UI
- Server-side rendering with Next.js
- Custom Web Components integration with React
- SQLite database for data persistence

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open http://localhost:3000 in your browser

### Production Deployment

Build the application for production:

```bash
npm run build
npm start
```

For PM2 deployment:

```bash
npm run build
pm2 start npm --name "keyless-note-app" -- start
```

## 🧩 Architecture

### Frontend

The application uses Next.js with React for the frontend. The main page ( pages/index.tsx ) displays a list of notes and provides functionality to add, edit, and delete notes.

### Web Components

The application uses Lit to create reusable web components. The note-card component is a key example, providing a consistent UI for displaying notes across the application.

### API Routes

The application uses Next.js API routes for backend functionality:

- GET /api/notes : Retrieve all notes
- POST /api/notes : Create a new note
- PUT /api/notes/[id] : Update a specific note
- DELETE /api/notes/[id] : Delete a specific note

### Database

SQLite is used for data persistence, with operations defined in the db/ directory.

## 🧪 Development

### Code Style

The project uses ESLint and TypeScript for code quality and type safety.

# Next steps

- [ ] Add user authentication
- [ ] Implement note sharing
- [ ] Implement note Markdown support
- [ ] Add note tags
- [ ] Add note search
- [ ] Add note history
- [ ] Add note versioning

## 📝 License

This project is licensed under the MIT License.
