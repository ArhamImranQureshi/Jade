# Jade Orchid Aesthetics: Next.js site

Built from "Jade Orchid Client Requirements.docx" (see `../Jade_Orchid_Website_Update_Brief.docx`).

## Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to /out (upload /out to any host)
```

## Where to edit
- `lib/data.js`: all copy (treatments, testimonials, locations, concerns, hours, contact).
- `components/`: Header (menu), Footer, Sections (tiles, reviews, locations), TreatmentBrowser, ContactForm.
- `app/`: one folder per page. `app/our-treatment/[slug]` builds the 11 treatment detail pages from `lib/data.js`.
- `public/img/`: photos from the client docx (resized). `public/img/old/`: logo and old-site photos.

## Animations
GSAP + ScrollTrigger, Lenis (smooth scroll) and SplitType. All of it lives in `components/Motion.js` (page animations) and `components/Loader.js` (first-visit loader on the home page).
- To animate a new element, add its selector to the `REVEAL` list in `Motion.js` **and** to the `.js-motion main :is(...)` rule in `app/globals.css`.
- Everything switches off automatically for visitors with "reduce motion" enabled. Loader length: `Loader.js` (1.9s).
- Marquee speed: `animation` in `.marquee-track` (globals.css).

## More content files
- `lib/content.js`: Training programme pages (from the client doc) and the 3 Skin Health Journal articles (**draft copy, clinic to review**).
- `lib/glance.js`: "At a glance" facts on treatment pages (from the old site; confirm with the clinic).

## Placeholders / to confirm with client
- Fire & Ice Facial video (home page "Experience the Difference"): placeholder until the landscape video arrives.
- Detail-page text for Laser, Hair Regeneration, Cancer Care, Facial Balancing, Harmony Facial is drafted from the client's topic lists; client should review. No prices shown where the old site's prices were inconsistent.
- Prices on detail pages come from the old site; confirm before launch.
- Skin Health Journal cards link to the journal page; real articles are not written yet.
- Contact form opens the visitor's email app (mailto). Replace with a form service (Formspree, etc.) if wanted.
- Social links in the footer are `#` placeholders.
- Testimonials need written patient consent.
- Partner strip is text (the supplied logo strip image had a fake transparency background).
- Clinician photo: used the portrait from the client doc; confirm it is the preferred one.
