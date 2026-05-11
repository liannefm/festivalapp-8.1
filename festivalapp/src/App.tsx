import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.scss'
import HomeScreen from './pages/HomeScreen/HomeScreen'
import LineupScreen from './pages/LineupScreen/LineupScreen'
import FavactScreen from './pages/FavactScreen/FavactScreen'
import InfoScreen from './pages/InfoScreen/InfoScreen'
import MapScreen from './pages/MapScreen/MapScreen'
import logo from './assets/img/logo_white.svg'
import homeIcon from './assets/icons/home.png'
import homeIconRed from './assets/icons/homered.png'
import infoIcon from './assets/icons/info.png'
import infoIconRed from './assets/icons/infored.png'
import lineupIcon from './assets/icons/musical-note.png'
import lineupIconRed from './assets/icons/musicalnotered.png'
import favoritesIcon from './assets/icons/heart.png'
import favoritesIconRed from './assets/icons/heartred.png'
import mapIcon from './assets/icons/placeholder.png'
import mapIconRed from './assets/icons/placeholderred.png'

function AppContent() {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'HOME', icon: homeIcon, iconRed: homeIconRed },
    { path: '/info', label: 'INFO', icon: infoIcon, iconRed: infoIconRed },
    { path: '/lineup', label: 'LINE-UP', icon: lineupIcon, iconRed: lineupIconRed },
    { path: '/favorites', label: 'FAVORITES', icon: favoritesIcon, iconRed: favoritesIconRed },
    { path: '/map', label: 'MAP', icon: mapIcon, iconRed: mapIconRed },
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <img src={logo} alt="Festival Logo" className="logo-img" />
            <span className="festival-text">FESTIVAL</span>
          </div>
          <img src="/src/assets/icons/lightbulb.png" alt="Lightbulb" className="lightbulb" />
          <img src="/src/assets/img/dutchflag.png" alt="Flag" className="flag" />
        </div>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/lineup" element={<LineupScreen />} />
          <Route path="/favorites" element={<FavactScreen />} />
          <Route path="/info" element={<InfoScreen />} />
          <Route path="/map" element={<MapScreen />} />
        </Routes>
      </main>

      <nav className="bottom-nav">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <img 
              src={location.pathname === item.path ? item.iconRed : item.icon} 
              alt={item.label} 
              className="nav-icon"
            />
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
