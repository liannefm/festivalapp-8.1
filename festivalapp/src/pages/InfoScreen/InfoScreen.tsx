import './InfoScreen.scss'
import { FaBicycle, FaCar, FaTrain, FaBus, FaTaxi, FaLock, FaPills, FaDoorOpen, FaBoxes } from 'react-icons/fa'

function InfoScreen() {
  return (
    <div className="page infoscreen">

      <div className="info-content">
        <div className="info-section info-hero">
          <h1><img src="/src/assets/icons/heartfull.png" alt="Heart" className="heart-icon" /> U FESTIVAL</h1>
          <h3>Location: Strijkviertel, Utrecht</h3>
          <p>Navigation address: Strijkviertelweg, Utrecht</p>
          <p>Date & Opening hours:</p>
          <p>September 5 & 6, 2026 - 12:00 to 23:00</p>
        </div>

        <h2>Transport</h2>

        <div className="info-section">
          <div className="section-icon"><FaBicycle /></div>
          <div className="section-text">
            <h4>Bike</h4>
            <p>There is a large bicycle parking area where you can park your bike for the entire day.</p>
          </div>
        </div>

        <div className="info-section">
          <div className="section-icon"><FaCar /></div>
          <div className="section-text">
            <h4>Car</h4>
            <p>You can purchase a parking ticket. Parking is available at P + R Papendorp, follow the signs for 'P online ticket'. Did you not buy a ticket in advance? Then you can purchase a parking ticket from the attendant on site (PIN ONLY). Please note: capacity is limited.</p>
          </div>
        </div>

        <div className="info-section">
          <div className="section-icon"><FaTrain /></div>
          <div className="section-text">
            <h4>OV</h4>
            <p>Are you coming to Lief by public transport? Then plan your trip via 9292.nl.</p>
          </div>
        </div>

        <div className="info-section">
          <div className="section-icon"><FaBus /></div>
          <div className="section-text">
            <h4>Shuttlebus</h4>
            <p>From Utrecht Central, you can take our free shuttle bus to the festival grounds. You will find this bus at the central station on Mineurslaan. Follow the white signs with black arrows and '❤️U Festival'. The bus runs towards the festival between 12:00PM and 7:00PM, and from 9:00PM onwards you can board again to go to the station.</p>
          </div>
        </div>

        <div className="info-section">
          <div className="section-icon"><FaTaxi /></div>
          <div className="section-text">
            <h4>Taxi + Kiss & Ride</h4>
            <p>Navigate to Strijkviertelweg, de Meern (Utrecht) Follow the signs "Kiss & Ride ❤️U Festival" as soon as you are near the festival grounds.</p>
          </div>
        </div>

        <h2>Lockers</h2>

        <div className="info-section">
          <div className="section-icon"><FaLock /></div>
          <div className="section-text">
            <h4>Lockers</h4>
            <p>Lockers are available on the festival grounds where you can safely store your belongings! They fit 3 to 4 jackets. Good to know: you can open and close your locker as often as you like throughout the day. It is not possible to reserve a locker online.</p>
          </div>
        </div>

        <h2>FAQ</h2>

        <div className="info-section">
          <div className="section-icon"><FaPills /></div>
          <div className="section-text">
            <h4>I take medication. What now?</h4>
            <p>It is permitted to bring medication in a dose that is the maximum you need for one day. A doctor's certificate/medication passport is required. Security will review your documentation and check the medication. It is possible that First Aid will take your medication into safekeeping (for example, if it's dangerous in combination with alcohol) and that you can only take it at the First Aid.</p>
          </div>
        </div>

        <div className="info-section">
          <div className="section-icon"><FaDoorOpen /></div>
          <div className="section-text">
            <h4>Am i allowed to leave the festival grounds temporarily?</h4>
            <p>No, unfortunately that is not possible. To ensure the safety of all visitors we cannot allow visitors to leave the festival grounds temporarily. After all, we have no insight what a visitor does outside the festival grounds or the state in which they re-enter. Therefore, no exceptions can be made. We have enough lounge areas, food stands, and bars to keep you going for a whole day.</p>
          </div>
        </div>

        <div className="info-section">
          <div className="section-icon"><FaBoxes /></div>
          <div className="section-text">
            <h4>Are there lockers?</h4>
            <p>Yes, there are! You can rent medium and large lockers on the grounds.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoScreen
