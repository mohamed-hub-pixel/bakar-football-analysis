// All clubs, players and pundits below are fictional — built for this demo
// so the analytics hub has realistic content to render out of the box.
// Swap this file for a live API or CMS feed when you're ready to go live.

import adonisWilliams from '../assets/image/ADONIS WILLIAMS.jpeg'
import alhajiFsKamara from '../assets/image/ALHAJI FS KAMARA.jpeg'
import bobReeves from '../assets/image/BOB REEVES.jpeg'
import mohamedTuray from '../assets/image/MOHAMED TURAY.jpeg'

export const matchweek = 7

export const pundits = [
  {
    id: 'p1',
    name: 'BOB REEVES',
    role: 'Former Ironbridge United captain',
    image: bobReeves,
    initials: 'DO',
    take: "Kestrel City's back three has stopped guessing and started reading the game — that's the difference between a good defence and a title-chasing one.",
    topic: 'Kestrel City’s defensive shape',
  },
  {
    id: 'p2',
    name: 'ADONI WILLIAMS',
    role: 'Tactics columnist, The Matchday Wire',
    image: adonisWilliams,
    initials: 'MF',
    take: "Harrow Vale keep inverting their full-backs into midfield, and nobody has worked out a clean way to press it yet. It's the smartest wrinkle in the league right now.",
    topic: 'Harrow Vale’s build-up shape',
  },
  {
    id: 'p3',
    name: 'ALHAJI FS KAMARA',
    role: 'Ex-Sable Rovers midfielder',
    image: alhajiFsKamara,
    initials: 'CP',
    take: 'People keep saying Ironbridge miss a target man. They don’t — they miss someone willing to run the channel instead of coming short every time.',
    topic: 'Ironbridge United’s attack',
  },
  {
    id: 'p4',
    name: 'MOHAMED TURAY',
    role: 'Data analyst & broadcaster',
    image: mohamedTuray,
    initials: 'PN',
    take: 'Calder Athletic are creating more open-play xG per 90 than anyone outside the top four. The table hasn’t caught up to the underlying numbers yet.',
    topic: 'Calder Athletic’s underlying numbers',
  },
]

export const debateThreads = [
  {
    id: 'd1',
    question: 'Is Kestrel City’s unbeaten run built to last?',
    forVotes: 612,
    againstVotes: 388,
  },
  {
    id: 'd2',
    question: 'Should Harrow Vale’s wing-backs get international call-ups?',
    forVotes: 741,
    againstVotes: 259,
  },
  {
    id: 'd3',
    question: 'Is it time to drop Ironbridge’s No.9 to the bench?',
    forVotes: 344,
    againstVotes: 656,
  },
]

export const players = [
  { id: 1, name: 'Sam Okonkwo', team: 'Ironbridge United', pos: 'FWD', apps: 7, goals: 9, assists: 2, rating: 8.1 },
  { id: 2, name: 'Théo Vasquez', team: 'Kestrel City', pos: 'MID', apps: 7, goals: 4, assists: 6, rating: 8.4 },
  { id: 3, name: 'Marcus Idowu', team: 'Kestrel City', pos: 'DEF', apps: 7, goals: 1, assists: 0, rating: 7.9 },
  { id: 4, name: 'Ren Kobayashi', team: 'Harrow Vale', pos: 'MID', apps: 6, goals: 3, assists: 7, rating: 8.3 },
  { id: 5, name: 'Bakari Sowande', team: 'Calder Athletic', pos: 'FWD', apps: 7, goals: 7, assists: 3, rating: 7.8 },
  { id: 6, name: 'Finn O’Callaghan', team: 'Sable Rovers', pos: 'GK', apps: 7, goals: 0, assists: 0, rating: 7.6, cleanSheets: 4 },
  { id: 7, name: 'Adrien Lachaux', team: 'Port Aldwyn FC', pos: 'DEF', apps: 7, goals: 0, assists: 1, rating: 7.2 },
  { id: 8, name: 'Yusuf Tanrikulu', team: 'Harrow Vale', pos: 'DEF', apps: 7, goals: 2, assists: 4, rating: 8.0 },
  { id: 9, name: 'Diego Farrant', team: 'Ironbridge United', pos: 'MID', apps: 7, goals: 2, assists: 5, rating: 7.7 },
  { id: 10, name: 'Noel Achterberg', team: 'Calder Athletic', pos: 'MID', apps: 7, goals: 3, assists: 3, rating: 7.5 },
  { id: 11, name: 'Kwame Boadu', team: 'Sable Rovers', pos: 'FWD', apps: 7, goals: 5, assists: 1, rating: 7.4 },
  { id: 12, name: 'Iker Salaberri', team: 'Port Aldwyn FC', pos: 'GK', apps: 7, goals: 0, assists: 0, rating: 7.1, cleanSheets: 2 },
]

export const teamOfTheWeek = {
  formation: '4-3-3',
  matchweek,
  lineup: [
    { id: 1, name: 'Finn O’Callaghan', team: 'Sable Rovers', pos: 'GK', slot: 'GK', rating: 8.9, note: 'Six saves, one from point-blank range in the 89th minute.' },
    { id: 2, name: 'Adrien Lachaux', team: 'Port Aldwyn FC', pos: 'RB', slot: 'RB', rating: 8.2, note: 'Won every ground duel and set up the opener.' },
    { id: 3, name: 'Marcus Idowu', team: 'Kestrel City', pos: 'CB', slot: 'CB', rating: 8.6, note: 'Perfect tackle success rate against a direct front two.' },
    { id: 4, name: 'Sofia Berrettini', team: 'Calder Athletic', pos: 'CB', slot: 'CB', rating: 8.3, note: 'Stepped into midfield to spark three counters.' },
    { id: 5, name: 'Yusuf Tanrikulu', team: 'Harrow Vale', pos: 'LB', slot: 'LB', rating: 8.4, note: 'Two assists from an inverted full-back role.' },
    { id: 6, name: 'Ren Kobayashi', team: 'Harrow Vale', pos: 'CM', slot: 'CM', rating: 8.8, note: 'Most progressive passes of any player in Matchweek 7.' },
    { id: 7, name: 'Théo Vasquez', team: 'Kestrel City', pos: 'CM', slot: 'CM', rating: 8.7, note: 'Scored twice and dictated tempo throughout.' },
    { id: 8, name: 'Diego Farrant', team: 'Ironbridge United', pos: 'CM', slot: 'CM', rating: 8.1, note: 'Covered 12.4km, the most of any midfielder.' },
    { id: 9, name: 'Sam Okonkwo', team: 'Ironbridge United', pos: 'RW', slot: 'RW', rating: 8.9, note: 'Hat-trick, including the week’s standout solo goal.' },
    { id: 10, name: 'Bakari Sowande', team: 'Calder Athletic', pos: 'ST', slot: 'ST', rating: 8.0, note: 'Led the line and won the penalty against Sable Rovers.' },
    { id: 11, name: 'Kwame Boadu', team: 'Sable Rovers', pos: 'LW', slot: 'LW', rating: 8.2, note: 'Beat his marker seven times, a league high this week.' },
  ],
}

export const goalOfTheWeek = [
  {
    id: 'g1',
    scorer: 'Sam Okonkwo',
    team: 'Ironbridge United',
    opponent: 'Port Aldwyn FC',
    minute: 73,
    votes: 2140,
    description: 'Picked up the ball inside his own half, beat four challenges and finished low into the far corner.',
  },
  {
    id: 'g2',
    scorer: 'Ren Kobayashi',
    team: 'Harrow Vale',
    opponent: 'Sable Rovers',
    minute: 41,
    votes: 1875,
    description: 'Dropped his shoulder on the edge of the box and curled a first-time strike into the top corner.',
  },
  {
    id: 'g3',
    scorer: 'Noel Achterberg',
    team: 'Calder Athletic',
    opponent: 'Kestrel City',
    minute: 8,
    votes: 1420,
    description: 'Met a corner on the half-volley from outside the area, dipping under the crossbar.',
  },
  {
    id: 'g4',
    scorer: 'Kwame Boadu',
    team: 'Sable Rovers',
    opponent: 'Harrow Vale',
    minute: 65,
    votes: 1190,
    description: 'A one-two on the byline before cutting back for a first-time volley through a crowded box.',
  },
]

export const standings = [
  { team: 'Kestrel City', played: 7, w: 6, d: 1, l: 0, gd: 14, pts: 19 },
  { team: 'Harrow Vale', played: 7, w: 5, d: 1, l: 1, gd: 11, pts: 16 },
  { team: 'Ironbridge United', played: 7, w: 4, d: 2, l: 1, gd: 9, pts: 14 },
  { team: 'Calder Athletic', played: 7, w: 4, d: 1, l: 2, gd: 6, pts: 13 },
  { team: 'Sable Rovers', played: 7, w: 3, d: 2, l: 2, gd: 2, pts: 11 },
  { team: 'Port Aldwyn FC', played: 7, w: 1, d: 2, l: 4, gd: -7, pts: 5 },
]
