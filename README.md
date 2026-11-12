# Sunny Lodge

The website of Sunny Lodge, a holiday home for up to 10 guests in Savines-le-Lac, on the shores of Lake Serre-Ponçon in the French Alps.

The site presents my house and its bedrooms, guest reviews and our favourite local spots: activities, sightseeing and restaurants. It also lets guests check availability and send a booking request directly, without going through Airbnb.

## Features

- Presentation of the house, bedrooms, amenities and photos
- Guest reviews with their source (Airbnb, Gîtes de France, Google)
- Activity pages for summer and winter: skiing, hiking, cycling, climbing, water sports and more
- Sightseeing and restaurant recommendations
- Availability calendar synced from the Airbnb calendar (iCal)
- Direct booking requests sent by email through [Web3Forms](https://web3forms.com/)
- Typed content with photo path autocompletion

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Web3Forms
- Surge (staging)

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Then open http://localhost:5173 in your browser.


## Availability sync

Booked dates are fetched from the Airbnb calendar export (iCal) and saved to `public/availability.json` (dates only).

Create a `.env.local` file at the root of the project (it is not committed):

```bash
AIRBNB_ICAL_URL=https://www.airbnb.com/calendar/ical/...
GDF_ICAL_URL=
```

Then run:

```bash
npm run sync:dispo
```

Periods that don't appear in the Airbnb export can be blocked by hand in `BOOKING.manualBlocks` in `src/data.ts`.

## Deployment

Build the site:

```bash
npm run build
```

Deploy to the staging site on Surge (syncs availability, builds, and blocks search engines):

```bash
npm run deploy:qualif
```
