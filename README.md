# SFR Jalama

Static website for sfrjalama.com. Built with HTML, CSS, and vanilla JS. Deployed via Netlify.

## Structure

```
sfr-jalama/
├── index.html              ← Home page
├── pages/
│   ├── about.html
│   ├── stays.html
│   ├── events.html
│   ├── photography.html
│   ├── gallery.html
│   ├── inquiry.html
│   ├── contact.html
│   └── thank-you.html      ← Post-form submission
├── assets/
│   ├── css/global.css      ← All styles, design tokens
│   ├── js/main.js          ← Mobile nav toggle
│   └── images/             ← Drop all photos here
```

## Local preview

Use any static server. With Node installed:

```bash
npx serve .
```

Then open http://localhost:3000.

## Adding photos

Drop images into `assets/images/`. File names expected by the pages:

| File | Used on |
|------|---------|
| `hero.jpg` | Home hero |
| `stays-card.jpg` | Home stays card |
| `events-card.jpg` | Home events card |
| `photo-card.jpg` | Home photography card |
| `weddings-card.jpg` | Events page |
| `reunions-card.jpg` | Events page |
| `corporate-card.jpg` | Events page |
| `launch-card.jpg` | Events page |
| `glamping-card.jpg` | Stays coming-soon |
| `cabin-card.jpg` | Stays coming-soon |
| `airstream-card.jpg` | Stays coming-soon |
| `gallery-01.jpg` through `gallery-12.jpg` | Gallery page |

## Inquiry form

The form on `inquiry.html` uses Formspree. To activate:
1. Go to formspree.io and create a new form pointed at howdy@sfrjalama.com
2. Copy the form ID
3. Replace `YOUR_FORM_ID` in `pages/inquiry.html` with the real ID

## Deploy

Hosted on Vercel (connected to github.com/tennybirkley/sfr-jalama). Pushes to `main` deploy automatically. Point `sfrjalama.com` DNS to Vercel after client review.
