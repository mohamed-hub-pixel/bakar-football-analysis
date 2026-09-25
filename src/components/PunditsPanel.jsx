import { useState } from 'react'
import { pundits, debateThreads } from '../data/mockData'


function DebatePoll({ thread }) {
  const [votes, setVotes] = useState({ for: thread.forVotes, against: thread.againstVotes })
  const [voted, setVoted] = useState(null)
  const total = votes.for + votes.against
  const forPct = total === 0 ? 0 : Math.round((votes.for / total) * 100)
  const againstPct = 100 - forPct

  const cast = (side) => {
    if (voted) return
    setVotes((v) => ({ ...v, [side]: v[side] + 1 }))
    setVoted(side)
  }

  return (
    <div className="rounded-sm border border-ink-line bg-ink-panel p-5">
      <p className="font-display text-lg text-chalk">{thread.question}</p>
      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-card/30">
        <div className="h-full bg-pitch" style={{ width: `${forPct}%` }} />
      </div>
      <div className="mt-2 flex justify-between text-xs text-muted">
        <span>Agree — {forPct}%</span>
        <span>Disagree — {againstPct}%</span>
      </div>
      <div className="mt-4 flex gap-3">
        <button
          onClick={() => cast('for')}
          disabled={!!voted}
          className={`flex-1 rounded-sm border px-3 py-2 text-sm font-medium transition-colors ${
            voted === 'for'
              ? 'border-pitch bg-pitch/20 text-pitch'
              : 'border-ink-line text-chalk hover:border-pitch disabled:cursor-not-allowed'
          }`}
        >
          Agree
        </button>
        <button
          onClick={() => cast('against')}
          disabled={!!voted}
          className={`flex-1 rounded-sm border px-3 py-2 text-sm font-medium transition-colors ${
            voted === 'against'
              ? 'border-card bg-card/20 text-card'
              : 'border-ink-line text-chalk hover:border-card disabled:cursor-not-allowed'
          }`}
        >
          Disagree
        </button>
      </div>
      {voted && <p className="mt-3 text-xs text-muted">Thanks — your vote is counted above.</p>}
    </div>
  )
}

export default function PunditsPanel() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <p className="text-sm font-medium text-gold-bright">This week's panel</p>
      <h2 className="mt-2 font-display text-4xl text-chalk">What the pundits are saying</h2>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {pundits.map((p) => {
          const initials = p.initials ?? p.name.split(' ').map((part) => part[0]).join('').slice(0, 2)

          return (
            <article key={p.id} className="rounded-sm border border-ink-line bg-ink-panel p-6">
              <div className="flex items-center gap-3">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-11 w-11 rounded-full object-cover ring-1 ring-ink-line"
                  />
                ) : (
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink-line font-display text-sm text-chalk">
                    {initials}
                  </span>
                )}
                <div>
                  <p className="font-medium text-chalk">{p.name}</p>
                  <p className="text-xs text-muted">{p.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm uppercase tracking-wide text-gold-bright/80">{p.topic}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-chalk/90">"{p.take}"</p>
            </article>
          )
        })}
      </div>

      <div className="mt-14">
        <h3 className="font-display text-2xl text-chalk">Have your say</h3>
        <p className="mt-1 text-sm text-muted">Vote on this week's biggest talking points.</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {debateThreads.map((t) => (
            <DebatePoll key={t.id} thread={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
