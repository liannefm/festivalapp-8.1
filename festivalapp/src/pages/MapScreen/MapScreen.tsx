import './MapScreen.scss'

interface MapScreenProps {
  language: string
}

function MapScreen({ language }: MapScreenProps) {
  const translations = {
    en: {
      title: 'Map',
      locations: {
        1: 'POTION',
        2: 'THE LAKE',
        3: 'INFORMATION',
        4: 'HANGAR',
        5: 'TOILET',
        6: 'MERCHANDISE',
        7: 'ICE CREAM',
        8: 'FOOD',
        9: 'BAR',
        10: 'FIRST AID',
        11: 'LOCKER'
      }
    },
    nl: {
      title: 'Kaart',
      locations: {
        1: 'POTION',
        2: 'THE LAKE',
        3: 'INFORMATIE',
        4: 'HANGAR',
        5: 'TOILET',
        6: 'MERCHANDISE',
        7: 'IJS',
        8: 'ETEN',
        9: 'BAR',
        10: 'EERSTE HULP',
        11: 'KLUISJE'
      }
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
            <span>{t.locations[1]}</span>
          </div>
          <div className="legend-item">
            <span className="number">2</span>
            <span>{t.locations[2]}</span>
          </div>
          <div className="legend-item">
            <span className="number">3</span>
            <span>{t.locations[3]}</span>
          </div>
          <div className="legend-item">
            <span className="number">4</span>
            <span>{t.locations[4]}</span>
          </div>
          <div className="legend-item">
            <span className="number">5</span>
            <span>{t.locations[5]}</span>
          </div>
          <div className="legend-item">
            <span className="number">6</span>
            <span>{t.locations[6]}</span>
          </div>
        </div>
        <div className="legend-column">
          <div className="legend-item">
            <span className="number">7</span>
            <span>{t.locations[7]}</span>
          </div>
          <div className="legend-item">
            <span className="number">8</span>
            <span>{t.locations[8]}</span>
          </div>
          <div className="legend-item">
            <span className="number">9</span>
            <span>{t.locations[9]}</span>
          </div>
          <div className="legend-item">
            <span className="number">10</span>
            <span>{t.locations[10]}</span>
          </div>
          <div className="legend-item">
            <span className="number">11</span>
            <span>{t.locations[11]}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapScreen
