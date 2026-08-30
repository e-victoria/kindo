# Kindo

Frontend React web app for Kindo, a platform for daycares and preschools. The backend is kindo-api (separate repo).

Kindo keeps teachers, parents, and directors connected around a child's day:

- **Teachers** communicate with parents, create reports, plan activities, and post photos and videos.
- **Parents** chat with teachers and directors, and inform them about a child's absence.
- **Directors** communicate with families.

## Tech stack

- React 19
- Vite
- TypeScript
- Tailwind CSS 4 (`@tailwindcss/vite`)

This repo is the frontend only. Do not add a backend here.

## Languages

The app is bilingual: **English** and **Polish**. More languages may be added later.

- Do not hardcode user-visible strings (UI copy, labels, errors, empty states, aria labels). Put them in locale files so a new language is additive.
- Every new user-facing string needs both `en` and `pl`. English is the source; Polish must ship in the same change, not as a follow-up.
- Design layouts for Polish string lengths, not English. Polish is often longer.
- Locale codes: `en`, `pl`. Keep that shape when adding languages.
