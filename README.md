# Cinematic Portfolio — Next.js + Tailwind (JavaScript, no TypeScript)

Ek fully cinematic-style personal portfolio: Hero (movie title card), About,
Skills, Portfolio (filmstrip "scenes"), aur Contact ("Roll Credits") section.
Signature motif: 35mm filmstrip sprocket-hole rails, film grain overlay,
cursor spotlight, aur scroll-triggered reveal animations (Framer Motion).

## 1. Chalane ka tareeqa (Run locally)

Terminal me project folder ke andar ja kar:

```bash
npm install
npm run dev
```

Phir browser me `http://localhost:3000` khol lein.

Production build ke liye:

```bash
npm run build
npm start
```

## 2. Apni details add karna (most important step)

Aapko component files ke andar jaane ki zaroorat **nahi** — sirf ek file edit
karni hai:

```
src/data/content.js
```

Yahan se change karein:
- `profile` → name, role, tagline, email, resume link, social links
- `about` → bio paragraphs aur stats (years experience, projects, etc.)
- `skillGroups` → apni skills aur unka proficiency % (Frontend/Backend/Tools)
- `projects` → apne projects (title, description, tags, live link, github link)
- `nav` → navbar ke labels/links (agar section names change karne hon)

## 3. Rang / Fonts change karna

`tailwind.config.js` me `colors` object hai:
- `ink` = background (dark theater black)
- `gold` = spotlight/accent color
- `teal` = secondary accent
- `paper` = main text color

Fonts `src/app/layout.js` me set hain (Space Grotesk = display/headings,
Inter = body text) — Google Fonts se `next/font/google` ke zariye load hote
hain, koi extra setup nahi chahiye.

## 4. Contact form ko real banana

Abhi contact form submit hone par user ka mail client khulta hai
(`mailto:`). Agar aap chahte hain ke form seedha aapke inbox me email bheje
bina mail client khole, to `src/components/Contact.js` ke `handleSubmit`
function ko kisi service se connect kar dein, jaise:
- Formspree
- Resend
- EmailJS

## 5. Folder structure

```
src/
  app/
    layout.js      -> fonts + global wrapper
    page.js         -> sections ko assemble karta hai
    globals.css      -> theme, film grain, sprocket styles
  components/
    Navbar.js, Hero.js, About.js, Skills.js,
    Portfolio.js, Contact.js, Footer.js,
    FilmGrain.js, CursorSpotlight.js, SprocketRail.js, Reveal.js
  data/
    content.js      -> SAARI CONTENT YAHAN SE EDIT KAREIN
```

## 6. Deploy

Sabse aasan tareeqa **Vercel** hai (Next.js banane wali company):
1. Code GitHub par push karein
2. vercel.com par jaake "Import Project" karein
3. Deploy dabayein — free hai personal portfolio ke liye

Enjoy! 🎬
