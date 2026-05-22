# Gurushree Hospital — Static Website

Professional static site for [Gurushree Hi-Tech Multi-Speciality Hospital](https://gurushreehospital.com/), Chandra Layout, Bangalore.

## Run locally

```bash
cd "/Users/Rohit.Pachori/web projects/gurushree"
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080)

Or open `index.html` directly in a browser.

## Structure

- `index.html` — single-page layout (hero, about, facilities, specialities, team, contact)
- `css/styles.css` — minimal design, scroll reveal, responsive nav
- `js/data.js` — content from gurushreehospital.com
- `js/main.js` — animations, mobile menu, counters

## Deploy

Upload all files to any static host (Netlify, Vercel, GitHub Pages, S3, etc.).
