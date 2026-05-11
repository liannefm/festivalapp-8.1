import { Link } from 'react-router-dom'
import './HomeScreen.scss'

function HomeScreen() {
  return (
    <div className="page homescreen">
      <div className="hero-section">
        <img src="/src/assets/img/homescreenimg.png" alt="Festival Crowd" className="hero-image" />
        <div className="hero-overlay">
          <h1>WELCOME TO</h1>
          <h2><img src="/src/assets/icons/heartfull.png" alt="Festival Logo" /> U FESTIVAL</h2>
        </div>
      </div>

      <div className="content-wrapper">
        <Link to="/lineup" className="explore-btn">
          EXPLORE LINE-UP →
        </Link>

        <div className="next-up">
          <h3>Next up</h3>
          <div className="artist-card">
            <img src="" alt="Armin van Buuren" className="artist-avatar" />
            <div className="artist-info">
              <p className="artist-name">Armin van Buuren</p>
              <p className="artist-time">10:30 - 11:45</p>
              <p className="artist-stage">Hangar Stage</p>
            </div>
            <button className="favorite-btn"><img src="/src/assets/icons/heartfull.png" alt="Add to favorites" /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
