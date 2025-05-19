# Club World Cup Master Tracker

This project is a web application built using Next.js to help fans track match schedules and compare ticket availability for the FIFA Club World Cup. It integrates real-time data from the API-SPORTS Football API and Ticketmaster.

## 🌐 Live App
Deployed on Vercel: https://your-vercel-url.vercel.app/

## 🚀 Features
- Live match schedule from Football API
- Real-time ticket data from Ticketmaster
- Sortable and interactive ticket comparison table
- Mobile-responsive design

## 🧪 Technologies
- Next.js (React Framework)
- Tailwind CSS
- API-SPORTS Football API
- Ticketmaster Discovery API

---

## 🛠 Developer Manual

### ⚙ Installation

```bash
git clone https://github.com/yourusername/club-world-cup-tracker.git
cd club-world-cup-tracker
npm install
```

Create a `.env.local` file and copy the contents from `.env.example`, replacing with your real API keys.

### ▶ Running Locally

```bash
npm run dev
```

### 🌐 API Endpoints

- `/api/matches`: Fetches matches from API-SPORTS
- `/api/tickets`: Fetches tickets from Ticketmaster

### 🛠 Vercel Deployment

Just push to GitHub and connect the repo to [Vercel](https://vercel.com). Add the same `.env.local` variables to Vercel project settings.

---

## ⚠ Known Issues
- APIs may rate-limit requests on free tiers.
- Ensure CORS-safe headers for fetch calls.

## 📌 Future Improvements
- Add team logo icons
- User login to track favorite matches
