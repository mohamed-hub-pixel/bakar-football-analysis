import { standings, matchweek } from '../data/mockData'

export default function Hero({ onNavigate }) {
  return (
    <div>
      <section className="score-strip h-1.5 w-full opacity-70" />
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-14">
        <p className="text-sm font-medium text-gold-bright">Matchweek {matchweek} wrap</p>
        <h1 className="mt-3 max-w-2xl font-display text-5xl leading-[1.05] text-chalk sm:text-6xl">
          Every result, argued over and broken down before the pitch is even dry.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted">
          Pundit debate, the full stats sheet, this week's best XI and the goal
          everyone's still talking about — all in one place.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => onNavigate('pundits')}
            className="rounded-sm bg-gold px-5 py-3 font-medium text-ink transition-colors hover:bg-gold-bright"
          >
            Hear the pundits
          </button>
          <button
            onClick={() => onNavigate('goal-of-the-week')}
            className="rounded-sm border border-ink-line px-5 py-3 font-medium text-chalk transition-colors hover:border-gold"
          >
            See the goal of the week
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="overflow-hidden rounded-sm border border-ink-line">
            <div className="flex items-center justify-between border-b border-ink-line bg-ink-panel px-5 py-3">
              <h2 className="font-display text-lg tracking-wide text-chalk">League Table</h2>
              <span className="text-xs text-muted">After Matchweek {matchweek}</span>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wide text-muted">
                  <th className="px-5 py-3 font-medium">Club</th>
                  <th className="px-3 py-3 text-center font-medium">P</th>
                  <th className="px-3 py-3 text-center font-medium">W</th>
                  <th className="px-3 py-3 text-center font-medium">D</th>
                  <th className="px-3 py-3 text-center font-medium">L</th>
                  <th className="px-3 py-3 text-center font-medium">GD</th>
                  <th className="px-5 py-3 text-center font-medium">Pts</th>
                </tr>
              </thead>
              <tbody className="tnum">
                {standings.map((row, i) => (
                  <tr key={row.team} className="border-t border-ink-line/70">
                    <td className="px-5 py-3 text-chalk">
                      <span className="mr-2 text-muted">{i + 1}</span>
                      {row.team}
                    </td>
                    <td className="px-3 py-3 text-center text-muted">{row.played}</td>
                    <td className="px-3 py-3 text-center text-muted">{row.w}</td>
                    <td className="px-3 py-3 text-center text-muted">{row.d}</td>
                    <td className="px-3 py-3 text-center text-muted">{row.l}</td>
                    <td className="px-3 py-3 text-center text-muted">
                      {row.gd > 0 ? `+${row.gd}` : row.gd}
                    </td>
                    <td className="px-5 py-3 text-center font-semibold text-gold-bright">
                      {row.pts}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { id: 'pundits', title: 'Pundit Panel', body: 'Four voices, one debate: is Kestrel City’s form for real?' },
              { id: 'stats', title: 'Player Stats', body: 'Sortable goals, assists and ratings from every fixture.' },
              { id: 'team-of-the-week', title: 'Team of the Week', body: 'The XI that earned their place after Matchweek 7.' },
            ].map((card) => (
              <button
                key={card.id}
                onClick={() => onNavigate(card.id)}
                className="rounded-sm border border-ink-line bg-ink-panel p-5 text-left transition-colors hover:border-gold"
              >
                <h3 className="font-display text-lg text-chalk">{card.title}</h3>
                <p className="mt-1 text-sm text-muted">{card.body}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
