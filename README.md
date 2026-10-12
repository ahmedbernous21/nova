# NOVA

Premium site for NOVA, an independent digital studio in France. Each language is its own address: `/fr`, `/en`, and `/ar`. Arabic is right to left. Opening `/` goes to `/fr`.

## Run

```bash
npm install
npm run dev
```

## Configure

Contact channels live in `src/content/site.ts`. Leave a field empty to hide it. Do not invent a street address, a city, or client names.

The contact form only reports a message as sent after a real form endpoint accepts it. Copy `.env.example` to `.env`:

```bash
VITE_FORM_ENDPOINT=https://api.web3forms.com/submit
VITE_FORM_ACCESS_KEY=your_public_key
```

A Formspree endpoint works too. Leave `VITE_FORM_ACCESS_KEY` empty in that case.

## Content

- Translations: `src/i18n/fr.ts`, `src/i18n/en.ts`, and `src/i18n/ar.ts`
- Portfolio pieces: `src/content/projects.ts`
- Founder names, biographies, and portrait paths: `src/content/site.ts`

Portfolio entries stay labeled as concepts or demonstrations until real projects are added. Optional `videoSrc` values should point at files in `public/`.
