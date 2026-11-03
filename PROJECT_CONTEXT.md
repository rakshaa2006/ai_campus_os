# AI Campus OS: Project Context

## 1. What it is

AI Campus OS is a role-based campus platform for an engineering college. Students, faculty, and administrators each get a personalised view of campus life in one connected system. It starts as a secure website and later becomes a mobile app that reuses the same backend.

## 2. The problem

Campus information is scattered across notice boards, group chats, emails, and separate tools. Students miss announcements, lost items are hard to track, and answers to simple questions (exam rules, deadlines, circulars) are hard to find and often unreliable.

## 3. Key differentiator

No single feature is unique. The value is the combination:

- **One connected system** with one identity and one data model across all modules.
- **Role-aware personalisation.** Each person sees what is relevant to them, enforced by database-level permissions (Supabase Row Level Security), not only by the interface.
- **Campus Intelligence.** An AI assistant that answers **only** from approved college documents and live data, shows its source citations, and says "I don't know" when it cannot answer.

AI Campus OS is designed as a student-experience layer alongside existing college ERPs. It does not replace them, and it does not handle fees, payroll, or formal exam administration.

## 4. Users and roles

| Role | Purpose |
|---|---|
| Student | Reads announcements, discovers events, reports and browses lost items, submits service requests, asks the assistant questions |
| Faculty | Publishes announcements and course updates, responds to relevant requests |
| Admin | Manages users and roles, publishes official content, moderates, approves documents used by the assistant |

Detailed permissions per role: TBD (to be defined with the database schema).

## 5. Planned modules

- Authentication and roles
- Announcements
- Events (listing and RSVP)
- CampusFind (lost and found)
- Service requests (submit and track status)
- Campus Intelligence (RAG with citations, plus a personalised "What did I miss today?" briefing)
- Notifications and installable web app (PWA)
- Later: timetable, placements, clubs, faculty and admin workflows

Optional future modules: biometric attendance and check-in. These must be consent-based, always offer a non-biometric fallback, store no raw biometric data, and be limited to attendance, access, exams, and events. They are not part of the first version.

## 6. Tech stack

| Layer | Technology |
|---|---|
| Frontend | Next.js, TypeScript, Tailwind CSS |
| UI creation | Screens designed in v0, then connected to real data |
| Backend | Supabase (PostgreSQL, Auth, Storage, Row Level Security, Realtime) |
| AI | Retrieval-Augmented Generation (RAG) over approved college documents |
| Hosting | Vercel |
| Mobile (later) | Expo / React Native, using the same Supabase backend and permissions |

## 7. Development phases

0. Workflow and setup
1. Foundation: Next.js project, folder structure, environment variables
2. Design system
3. Supabase: schema and Row Level Security
4. Authentication and roles
5. Core modules: announcements, events, CampusFind, service requests
6. Campus Intelligence
7. Notifications and PWA
8. Testing and hardening
9. Deployment and a pilot at the college
10. Mobile app (only after web workflows are stable and a pilot shows real usage)

## 8. Principles

- Never commit secrets. Use environment variables, and never expose service-role keys in the browser.
- Design Row Level Security together with the database schema, not afterwards.
- No placeholder implementations unless clearly labelled.
- The mobile app reuses the same backend and permissions, with no duplicated logic.
- UI follows the design references supplied by the owner. No redesigning without approval.
- Sensitive data (especially biometrics) requires explicit consent, minimal collection, and a fallback.

## 8a. How the UI and backend are built

- The visual layer (pages and components) is designed in v0 using mock data.
- The backend (database, authentication, permissions, data access) is built separately.
- v0 components are then connected to real Supabase data without changing their design.

## 9. Decisions still open

- Design system (colors, typography, components): TBD, after references are chosen
- Database schema and per-role permissions: TBD
- Document storage and embedding approach for the assistant: TBD
- Notification channels: TBD
- Pilot college and pilot scope: TBD

## 10. Owner

Raksha ([rakshaa2006](https://github.com/rakshaa2006)).