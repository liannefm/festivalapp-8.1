import { useMemo, useState } from 'react'
import './LineupScreen.scss'

interface LineupScreenProps {
  language: string
}

const times = ['10:00', '10:30', '11:00', '11:30', '12:00']
const stages = ['Poton', 'The Lake', 'The Club', 'Hanggar']

// const stageEmoji: Record<string, string> = {
//   Poton: '🔥',
//   'The Lake': '🌊',
//   'The Club': '🎵',
//   Hanggar: '✈️',
// }

const schedule: Record<
  string,
  Array<{ stage: string; start: string; end: string; artist: string; color: string }>
> = {
  saturday: [
    { stage: 'Poton', start: '10:30', end: '11:30', artist: 'DJ Nova', color: 'poton' },
    { stage: 'The Lake', start: '10:00', end: '10:30', artist: 'Aqua Beats', color: 'lake' },
    { stage: 'The Club', start: '10:30', end: '11:00', artist: 'Neon Pulse', color: 'club' },
    { stage: 'Hanggar', start: '10:30', end: '11:30', artist: 'Sky High', color: 'hanggar' },
  ],
  sunday: [
    { stage: 'Poton', start: '10:00', end: '10:30', artist: 'Blaze', color: 'poton' },
    { stage: 'The Lake', start: '11:00', end: '11:30', artist: 'Wave Runner', color: 'lake' },
    { stage: 'Hanggar', start: '10:30', end: '11:00', artist: 'Altitude', color: 'hanggar' },
  ],
}

function LineupScreen({ language }: LineupScreenProps) {
  const translations = {
    nl: {
      title: 'Line-up',
      saturday: 'Zaterdag',
      sunday: 'Zondag'
    },
    en: {
      title: 'Line-up',
      saturday: 'Saturday',
      sunday: 'Sunday'
    }
  }

  const t = translations[language as keyof typeof translations] || translations.en
  const [activeDay, setActiveDay] = useState('saturday')

  const activeSchedule = useMemo(() => schedule[activeDay] || [], [activeDay])

  return (
    <div className="page lineupscreen">
      <h1>{t.title}</h1>

      <div className="day-tabs">
        <button
          className={`tab ${activeDay === 'saturday' ? 'active' : ''}`}
          onClick={() => setActiveDay('saturday')}
        >
          {t.saturday}
        </button>
        <button
          className={`tab ${activeDay === 'sunday' ? 'active' : ''}`}
          onClick={() => setActiveDay('sunday')}
        >
          {t.sunday}
        </button>
      </div>

      <div className="grid-container">
        <div className="time-row">
          <div className="time-spacer" />
          {times.map(time => (
            <span key={time} className="time-label">{time}</span>
          ))}
        </div>

        <div className="lineup-grid">
          {stages.map(stage => {
            const events = activeSchedule.filter(e => e.stage === stage)
            return (
              <div key={stage} className="stage-row">
                <div className="stage-label">
                  {/* <span className="stage-emoji">{stageEmoji[stage]}</span> */}
                  <span className="stage-name">{stage}</span>
                </div>
                <div className="stage-track">
                  <div className="track-gridlines">
                    {times.map((_, i) => (
                      <div key={i} className="gridline" />
                    ))}
                  </div>
                  {events.map((event, i) => {
                    const startIdx = times.indexOf(event.start)
                    const endIdx = times.indexOf(event.end)
                    const totalSlots = times.length
                    const left = (startIdx / totalSlots) * 100
                    const width = ((endIdx - startIdx) / totalSlots) * 100
                    return (
                      <div
                        key={i}
                        className={`event-bar ${event.color}`}
                        style={{ left: `${left}%`, width: `${width}%` }}
                      >
                        <span className="event-artist">{event.artist}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="legend">
        {stages.map(stage => (
          <div key={stage} className="legend-item">
            <div className={`legend-dot ${stage.toLowerCase().replace(/\s/g, '-')}`} />
            <span>{stage}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LineupScreen
