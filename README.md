# Yap — Speech/Text to Indian Sign Language (ISL) Translator

Yap converts spoken or typed English/Hindi into Indian Sign Language, signed live by a 3D avatar in the browser. Built for SIH 2026.

## How it works

- **Input**: live speech (Web Speech API streaming) or typed text.
- **Translation**: `app/api/translate-isl` calls Gemini to convert text into ISL gloss. If no `GEMINI_API_KEY` is set (or the API is unreachable), the app falls back to an offline rule-based gloss engine (`lib/islTranslator.ts`, `components/avatar/textToGloss.js`).
- **Signing**: the gloss sequence drives a 3D avatar (`components/avatar/AvatarPlayer.tsx`) built with `react-three-fiber` / `three.js`, playing per-word/per-letter sign animations (including first-person signs and fingerspelling for unknown words).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Optional: copy `.env.example` to `.env.local` and set `GEMINI_API_KEY` (get one at https://aistudio.google.com/apikey) to enable the online translator. Without it, the app still works via the offline fallback.

## Tech stack

Next.js 16 · React 19 · TypeScript · react-three-fiber / three.js · Tailwind CSS · Google Gemini API

## Project structure

- `app/` — Next.js app router pages and API routes
- `components/avatar/` — 3D avatar, sign animations, gloss/text conversion
- `lib/` — ISL translation logic and vocabulary

## Team

Built by Mitarth Pathak, Navneet Singh, Gaurav Soni, Deep Panchal, and Nooren Qureshi.
