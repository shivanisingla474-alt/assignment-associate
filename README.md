# Assignment Associate website

Next.js (App Router), TypeScript, Tailwind CSS. No database, no login, no payments.
Visitors fill in the enquiry form, which prepares a WhatsApp message they send to you.

## Run it

```
npm install
npm run dev        # http://localhost:3000
```

Production check: `npm run lint`, `npm run build`, `npm start`.

## Where to change things

| What | File |
|---|---|
| WhatsApp number, display number, email, site name | `src/config/site.ts` |
| FAQ questions and answers | `src/config/faq.ts` |
| Assignment types (shown on the home page and used in the forms), subjects, countries | `src/data/catalog.ts` |
| Steps in "How it works" | `src/data/process.ts` |
| Privacy, Terms and Academic integrity text | `src/data/legal.ts` |
| Colours | `src/app/globals.css` (the `@theme` block) |
| Logo (cap only), full logo, favicon | `public/logo-cap.png`, `public/logo.png`, `src/app/icon.png` |
| Hero animation (Lottie JSON) | `src/data/hero-animation.json` (replace it with any Lottie file from lottiefiles.com if you like) |

Fonts (Fraunces and Inter) are bundled through the `@fontsource-variable` packages, so no external font requests are made.

WhatsApp number format: international, digits only, no `+` (for example `917206221655`).

## Before you go live

1. Set your real domain: create a `.env.local` file with `NEXT_PUBLIC_SITE_URL=https://your-domain.com` (also set it in your hosting dashboard). This is used for the sitemap, robots.txt and share previews.
2. Send yourself a test enquiry from your phone and confirm it arrives on WhatsApp.
3. Read the Privacy, Terms and Academic integrity pages in `src/data/legal.ts` and adjust them to match how you really work. Have them reviewed by a legal professional if you need that assurance.
4. Deploy, for example on Vercel (import the project, add the environment variable, deploy), then add the site to Google Search Console and submit `/sitemap.xml`.
