import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PunditsPanel from './components/PunditsPanel'
import PlayerStats from './components/PlayerStats'
import TeamOfWeek from './components/TeamOfWeek'
import GoalOfWeek from './components/GoalOfWeek'
import Footer from './components/Footer'

export default function App() {
  const [section, setSection] = useState('home')

  const navigate = (id) => {
    setSection(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-ink text-chalk">
      <Navbar active={section} onNavigate={navigate} />

      {section === 'home' && <Hero onNavigate={navigate} />}
      {section === 'pundits' && <PunditsPanel />}
      {section === 'stats' && <PlayerStats />}
      {section === 'team-of-the-week' && <TeamOfWeek />}
      {section === 'goal-of-the-week' && <GoalOfWeek />}

      <Footer />
    </div>
  )
}
