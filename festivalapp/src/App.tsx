import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import './App.scss'
import HomeScreen from './pages/HomeScreen/HomeScreen'
import LineupScreen from './pages/LineupScreen/LineupScreen'
import FavactScreen from './pages/FavactScreen/FavactScreen'
import InfoScreen from './pages/InfoScreen/InfoScreen'
import MapScreen from './pages/MapScreen/MapScreen'
import logo from './assets/img/logo_white.svg'
import logoBlack from './assets/img/logo-black.svg'

const translations = {
  nl: {
    nav: {
      home: 'HOME',
      info: 'INFO',
      lineup: 'LINE-UP',
      favorites: 'FAVORIETEN',
      map: 'KAART'
    },
    home: {
      welcome: 'WELKOM BIJ',
      festival: 'U FESTIVAL',
      explore: 'VERKEN LINE-UP →',
      nextUp: 'Volgende'
    },
    lineup: {
      title: 'Line-up',
      saturday: 'Zaterdag',
      sunday: 'Zondag'
    },
    favorites: {
      title: 'Mijn favorieten'
    },
    map: {
      title: 'Kaart'
    },
    info: {
      title: 'Info'
    }
  },
  en: {
    nav: {
      home: 'HOME',
      info: 'INFO',
      lineup: 'LINE-UP',
      favorites: 'FAVORITES',
      map: 'MAP'
    },
    home: {
      welcome: 'WELCOME TO',
      festival: 'U FESTIVAL',
      explore: 'EXPLORE LINE-UP →',
      nextUp: 'Next up'
    },
    lineup: {
      title: 'Line-up',
      saturday: 'Saturday',
      sunday: 'Sunday'
    },
    favorites: {
      title: 'My favorites'
    },
    map: {
      title: 'Map'
    },
    info: {
      title: 'Info'
    }
  }
}

function AppContent({ isLightMode, toggleTheme }: { isLightMode: boolean; toggleTheme: () => void }) {
  const location = useLocation()
  const [language, setLanguage] = useState('en')
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const t = translations[language as keyof typeof translations]

  const navItems = [
    { path: '/', label: t.nav.home, iconName: 'home' },
    { path: '/info', label: t.nav.info, iconName: 'info' },
    { path: '/lineup', label: t.nav.lineup, iconName: 'music_note' },
    { path: '/favorites', label: t.nav.favorites, iconName: 'favorite' },
    { path: '/map', label: t.nav.map, iconName: 'map' },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowLanguageDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown)
  }

  const selectLanguage = (lang: string) => {
    setLanguage(lang)
    setShowLanguageDropdown(false)
  }

  return (
    <div className={`app ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <img src={isLightMode ? logoBlack : logo} alt="Festival Logo" className="logo-img" />
            <span className="festival-text">FESTIVAL</span>
          </div>
          <div className="header-actions">
            <button
              type="button"
              className="theme-toggle"
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              <span className="material-symbols-outlined">
                {isLightMode ? 'dark_mode' : 'light_mode'}
              </span>
            </button>
            <div className="flag-container" ref={dropdownRef}>
            <img 
              src={language === 'nl' ? '/src/assets/img/dutchflag.png' : '/src/assets/img/usflag.png'} 
              alt="Language selector" 
              className="flag" 
              onClick={toggleLanguageDropdown}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') toggleLanguageDropdown()
              }}
            />
            {showLanguageDropdown && (
              <div className="language-dropdown">
                <button 
                  className={`language-option ${language === 'nl' ? 'active' : ''}`}
                  onClick={() => selectLanguage('nl')}
                >
                  🇳🇱 Nederlands
                </button>
                <button 
                  className={`language-option ${language === 'en' ? 'active' : ''}`}
                  onClick={() => selectLanguage('en')}
                >
                  🇺🇸 English
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomeScreen language={language} />} />
          <Route path="/lineup" element={<LineupScreen language={language} />} />
          <Route path="/favorites" element={<FavactScreen language={language} />} />
          <Route path="/info" element={<InfoScreen language={language} />} />
          <Route path="/map" element={<MapScreen language={language} />} />
        </Routes>
      </main>

      <nav className="bottom-nav">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <span className="material-symbols-outlined nav-icon">{item.iconName}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

function App() {
  const [isLightMode, setIsLightMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLightMode)
  }, [isLightMode])

  return (
    <BrowserRouter>
      <AppContent isLightMode={isLightMode} toggleTheme={() => setIsLightMode((prev) => !prev)} />
    </BrowserRouter>
  )
}

export default App
