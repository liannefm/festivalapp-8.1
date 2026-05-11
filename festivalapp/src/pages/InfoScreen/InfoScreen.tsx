import './InfoScreen.scss'

function InfoScreen() {
  return (
    <div className="page infoscreen">
      
      <div className="info-content">
        <div className="info-section">
        <h1><img src="/src/assets/icons/heartfull.png" alt="Heart" className="heart-icon" /> U FESTIVAL</h1>
          <h3>Location: Strauwwjel, Utrecht</h3>
          <p>Navigation address: Strijkertselweg, Utrecht</p>
          <p>Date & Opening hours:</p>
          <p>September 5 & 6, 2026 - 12:00 to 23:00</p>
        </div>

        <div className="info-section">
          <h4>Bike</h4>
          <p>There is a large bicycle parking area where you can park your bike for the entire day.</p>
        </div>

        <div className="info-section">
          <h4>Car</h4>
          <p>You can purchase a parking ticket. Parking is available at P43 Papendorp, follow the signs for "P" online ticket. Did you not buy a ticket in advance? Then you can also purchase an entry ticket to Binnenkant Ticket from the parking.</p>
        </div>

        <div className="info-section">
          <h4>OV</h4>
          <p>Are you coming via public transport? Then plan your trip via KNSM/N</p>
        </div>

        <div className="info-section">
          <h4>Shuttlebus</h4>
          <p>Will you be coming to Uet by public transport? Then take the shuttle bus to the festival grounds. You will find the shuttle bus at the central railway station on Maliestraat. Follow the white signs with black arrows and "U"</p>
        </div>
      </div>
    </div>
  )
}

export default InfoScreen
