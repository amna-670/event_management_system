# EventSphere Management

## Project Status: 🚧 In Progress

EventSphere Management is a MERN stack capstone project focused on creating an expo and trade show management platform.

The frontend is fully built. The backend is being developed incrementally — authentication (register, login, logout) is complete and connected to MongoDB Atlas, with more features in progress.

## Project Structure

- `Frontend/` — React + Vite frontend
- `Backend/` — Node.js + Express + MongoDB backend

## Current Features Implemented

- Modern dark-themed convention floor UI
- Landing page with responsive sections
- Admin dashboard interface (Expo, Booth, Schedule, Exhibitor management)
- Exhibitor portal interface
- Attendee portal interface
- Real authentication (Register/Login/Logout) connected to MongoDB Atlas
- Password hashing (bcrypt), server-side validation
- Redux Toolkit auth state with persistence across refresh
- Role-based protected routes (Admin, Exhibitor, Attendee)
- Toast notifications (Sonner)
- Charts and data visualization

## Features Still In Progress

- ExhibitorApplication workflow (approve/reject exhibitor applications)
- Booth selection and reservation system (real logic)
- Floor plan integration
- Messaging system between users
- Event registration system (attendee side)
- Notifications and reminders
- Complete admin analytics module (real data)
- JWT-based authentication (upgrade from current session handling)

## Tech Stack

**Frontend:** React + Vite, Tailwind CSS v4, React Router DOM, Redux Toolkit, Recharts, Lucide React, shadcn/ui, Sonner

**Backend:** Node.js, Express, MongoDB (Mongoose), bcrypt

## Setup

\`\`\`bash
# Frontend
cd Frontend
npm install
npm run dev

# Backend
cd Backend
npm install
npm start
\`\`\`

Backend requires a `.env` file with `PORT` and `MONGODB_URI` — not included in the repo for security.

## Project Purpose

This project is being developed as a learning-focused MERN capstone project to gradually build a complete expo management platform while improving frontend architecture, state management, authentication, and backend integration skills.