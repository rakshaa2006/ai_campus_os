# AI Campus OS

A role-based campus platform for students, faculty, and administrators. Its key differentiator is an AI assistant that answers questions **only from verified college documents** and shows source citations.

> **Status:** Early development. Nothing here is production-ready yet.

## What it will do

- One connected platform with personalised views for students, faculty, and admins
- Announcements, events, lost and found (CampusFind), and service requests
- **Campus Intelligence:** an AI assistant that answers from approved college documents, cites its sources, and says "I don't know" when it cannot answer
- A personalised "What did I miss today?" briefing

AI Campus OS is designed as a student-experience layer that works alongside existing college systems, not a replacement for them.

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | Next.js, TypeScript, Tailwind CSS |
| Backend | Supabase (PostgreSQL, Auth, Storage, Row Level Security) |
| AI | Retrieval-Augmented Generation (RAG) |
| Hosting | Vercel |
| Mobile (later) | Expo / React Native |

## Roadmap

- [ ] Project setup and documentation
- [ ] Design system
- [ ] Database schema and Row Level Security
- [ ] Authentication and roles (student, faculty, admin)
- [ ] Core modules: announcements, events, CampusFind, service requests
- [ ] Campus Intelligence (RAG with citations)
- [ ] Notifications and PWA
- [ ] Testing and deployment
- [ ] Mobile app

## Getting started

Setup instructions will be added once the project is scaffolded.

## Security

Never commit secrets. Environment variables belong in `.env.local`, which is ignored by Git.

## Author

Built by [Raksha](https://github.com/rakshaa2006).