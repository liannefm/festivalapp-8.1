import { useState } from 'react'
import './LineupScreen.scss'

function LineupScreen() {
  const [activeDay, setActiveDay] = useState('saturday')

  return (
    <div className="page lineupscreen">
      <h1>Line-up</h1>
      
      <div className="day-tabs">
        <button 
          className={`tab ${activeDay === 'saturday' ? 'active' : ''}`}
          onClick={() => setActiveDay('saturday')}
        >
          Saturday
        </button>
        <button 
          className={`tab ${activeDay === 'sunday' ? 'active' : ''}`}
          onClick={() => setActiveDay('sunday')}
        >
          Sunday
        </button>
      </div>

      <div className="timeline">
        <div className="time-slot">
          <span className="time">10:00</span>
          <div className="artist-bar"></div>
        </div>
        <div className="time-slot">
          <span className="time">10:30</span>
          <div className="artist-bar"></div>
        </div>
        {/* Add more time slots */}
      </div>

      <div className="stage-legend">
        <div className="stage-item">
          <div className="stage-color poton"></div>
          <span>Poton</span>
        </div>
        <div className="stage-item">
          <div className="stage-color lake"></div>
          <span>The Lake</span>
        </div>
        <div className="stage-item">
          <div className="stage-color club"></div>
          <span>The Club</span>
        </div>
        <div className="stage-item">
          <div className="stage-color hangar"></div>
          <span>Hangar</span>
        </div>
      </div>
    </div>
  )
}

export default LineupScreen
