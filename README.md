# World Explorer

A Next.js web application that allows users exploring countries around the world using real API data.

## Built By

**Hadia** · 2026

## Live Features

- Browse 20 countries with flags, capitals, regions, and populations
- View full details for each country (languages, currencies, time zones, Google Maps link)
- Search any country by name
- Filter countries by region (Africa, Americas, Asia, Europe, Oceania)
- Sort countries by name or population
- Save favorite countries with ❤️ icon
- Toggle between light and dark mode
- Fully responsive on mobile and desktop

## Pages

- Home page
- Countries
- Search
- Favorites
- About

## Components

- Navbar
- Footer
- Country Card
- Country Search


## Next.js Concepts Used

- App Router
- File-based routing
- Shared layout 
- Dynamic routes 
- Server components
- Client components 
- Data fetching 
- Static rendering 
- Dynamic rendering

## Bonus Features

- Region filter
- Sort by population
- Dark mode toggle
- Favorite countries (saved in localStorage)
- Custom 404 page
- Loading page

## API Used

**REST Countries API** — [https://restcountries.com](https://restcountries.com)

Endpoints used:
- `https://restcountries.com/v3.1/all` — all countries
- `https://restcountries.com/v3.1/alpha/{code}` — one country by code

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 