# The Matchday Wire — Football Analytics Hub

A full football analytics site built with **Vite + React + Tailwind CSS**:
pundit debate, player stats, Team of the Week, and Goal of the Week —
all in one single-page app.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  data/mockData.js       ← all content lives here: pundits, players, goals, standings
  components/
    Navbar.jsx            section switcher
    Hero.jsx               home page: standings + teasers
    PunditsPanel.jsx       pundit takes + interactive fan-debate polls
    PlayerStats.jsx        searchable, sortable, filterable stats table
    TeamOfWeek.jsx          formation pitch graphic + player notes
    GoalOfWeek.jsx          voteable goal-of-the-week cards
    Footer.jsx
  App.jsx                  ties the sections together
```

## Making it real

Everything currently reads from `src/data/mockData.js` (fictional clubs and
players, so the site works out of the box with no API keys). To go live:

1. Replace `mockData.js` with fetch calls to your stats provider (e.g.
   API-Football, Opta, or your own backend) inside a `useEffect`/data hook.
2. Swap the fictional pundit quotes for a CMS feed (e.g. Sanity, Contentful)
   or your own editorial admin tool.
3. Add real video embeds to `GoalOfWeek.jsx` and `PunditsPanel.jsx` (e.g.
   YouTube/Vimeo iframes) where the text descriptions currently sit.
4. Persist votes (debate polls, goal-of-the-week) to a backend instead of
   local component state, so tallies survive a page refresh.
5. If you want real per-page URLs instead of in-app tab state, add
   `react-router-dom` and map each section to a route.

## Design notes

Dark "matchday broadcast" theme: ink-navy background, gold broadcast accent,
pitch-green for positive/agree states, Oswald for display type paired with
Inter for body and data. Tables use tabular numerals for aligned stats.
# bakar-football-analysis
