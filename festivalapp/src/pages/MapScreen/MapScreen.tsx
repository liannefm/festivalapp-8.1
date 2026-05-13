import './MapScreen.scss'

interface MapScreenProps {
  language: string
}

function MapScreen({ language }: MapScreenProps) {
  const translations = {
    nl: {
      title: 'Kaart'
    },
    en: {
      title: 'Map'
    }
  }

  const t = translations[language as keyof typeof translations] || translations.en
  return (
    <div className="page mapscreen">
      <h1>{t.title}</h1>
      
      <div className="map-container">
        <div className="map" style={{ backgroundColor: '#4CAF50', height: '300px' }}>
          {/* Map will go here */}
        </div>
        <div className="map-controls">
          <button className="control-btn">+</button>
          <button className="control-btn">−</button>
        </div>
      </div>

      <div className="legend">
        <div className="legend-column">
          <div className="legend-item">
            <span className="number">1</span>
            <span>POTION</span>
          </div>
          <div className="legend-item">
            <span className="number">2</span>
            <span>THE LAKE</span>
          </div>
          <div className="legend-item">
            <span className="number">3</span>
            <span>INFORMATION</span>
          </div>
          <div className="legend-item">
            <span className="number">4</span>
            <span>HANGAR</span>
          </div>
          <div className="legend-item">
            <span className="number">5</span>
            <span>TOILET</span>
          </div>
          <div className="legend-item">
            <span className="number">6</span>
            <span>MERCHANDISE</span>
          </div>
        </div>
        <div className="legend-column">
          <div className="legend-item">
            <span className="number">7</span>
            <span>ICE CREAM</span>
          </div>
          <div className="legend-item">
            <span className="number">8</span>
            <span>FOOD</span>
          </div>
          <div className="legend-item">
            <span className="number">9</span>
            <span>BAR</span>
          </div>
          <div className="legend-item">
            <span className="number">10</span>
            <span>FIRST AID</span>
          </div>
          <div className="legend-item">
            <span className="number">11</span>
            <span>LOCKER</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapScreen
