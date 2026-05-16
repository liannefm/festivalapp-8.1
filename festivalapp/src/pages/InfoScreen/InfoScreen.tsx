import { useState } from 'react'
import './InfoScreen.scss'
import { FaBicycle, FaCar, FaTrain, FaBus, FaTaxi, FaLock, FaPills, FaDoorOpen, FaBoxes, FaCrown } from 'react-icons/fa'

interface InfoScreenProps {
  language: string
}

function InfoScreen({ language }: InfoScreenProps) {
  const translations = {
    nl: {
      title: 'Info',
      hero: {
        location: 'Locatie: Strijkviertel, Utrecht',
        address: 'Navigatieadres: Strijkviertelweg, Utrecht',
        date: 'Datum & Openingstijden:',
        hours: '5 & 6 september 2026 - 12:00 tot 23:00'
      },
      transport: 'Vervoer',
      lockers: 'Kluisjes',
      faq: 'FAQ',
      sections: {
        bike: {
          title: 'Fiets',
          text: 'Er is een grote fietsenstalling waar je je fiets de hele dag kunt stallen.'
        },
        car: {
          title: 'Auto',
          text: 'Je kunt een parkeerkaartje aanschaffen. Parkeren is mogelijk bij P + R Papendorp, volg de borden voor \'P online ticket\'. Heb je geen kaartje van tevoren gekocht? Dan kun je ter plekke een parkeerkaartje kopen bij de parkeerwacht (ALLEEN PIN). Let op: capaciteit is beperkt.'
        },
        ov: {
          title: 'OV',
          text: 'Kom je met het openbaar vervoer naar Lief? Plan dan je reis via 9292.nl.'
        },
        shuttle: {
          title: 'Shuttlebus',
          text: 'Vanaf Utrecht Centraal kun je onze gratis shuttlebus nemen naar het festivalterrein. Deze bus vind je bij het centraal station op de Mineurslaan. Volg de witte borden met zwarte pijlen en \'❤️U Festival\'. De bus rijdt richting festival tussen 12:00 en 19:00, en vanaf 21:00 kun je weer instappen om naar het station te gaan.'
        },
        taxi: {
          title: 'Taxi + Kiss & Ride',
          text: 'Navigeer naar Strijkviertelweg, de Meern (Utrecht) Volg de borden "Kiss & Ride ❤️U Festival" zodra je in de buurt van het festivalterrein bent.'
        },
        lockers: {
          title: 'Kluisjes',
          text: 'Kluisjes zijn beschikbaar op het festivalterrein waar je je spullen veilig kunt opbergen! Ze passen 3 tot 4 jassen. Goed om te weten: je kunt je kluisje zo vaak openen en sluiten als je wilt gedurende de dag. Het is niet mogelijk om een kluisje online te reserveren.'
        },
        medication: {
          title: 'Ik slik medicijnen. Wat nu?',
          text: 'Het is toegestaan om medicatie mee te nemen in een dosering die maximaal is wat je voor één dag nodig hebt. Een doktersverklaring/medicatiepaspoort is vereist. De beveiliging bekijkt je documentatie en controleert de medicatie. Het is mogelijk dat EHBO je medicatie in bewaring neemt (bijvoorbeeld als het gevaarlijk is in combinatie met alcohol) en dat je het alleen bij EHBO kunt innemen.'
        },
        leave: {
          title: 'Mag ik tijdelijk het festivalterrein verlaten?',
          text: 'Nee, helaas is dat niet mogelijk. Om de veiligheid van alle bezoekers te waarborgen kunnen we bezoekers niet tijdelijk het festivalterrein laten verlaten. We hebben immers geen inzicht in wat een bezoeker buiten het festivalterrein doet of in welke staat ze weer binnenkomen. Daarom kunnen geen uitzonderingen worden gemaakt. We hebben genoeg lounge gebieden, eetkraampjes en bars om je een hele dag bezig te houden.'
        },
        lockers2: {
          title: 'Zijn er kluisjes?',
          text: 'Ja, die zijn er! Je kunt middelgrote en grote kluisjes huren op het terrein.'
        },
        golden: {
          title: 'Golden-GLU',
          text: 'Studenten van het GLU hebben tijdens het festival speciale privileges en zijn herkenbaar aan een gouden armbandje. Met dit gouden armbandje kunnen ze gebruik maken van de gouden toiletten en met goud gemarkeerde bestelpunten aan de bars zonder in een rij te hoeven staan.'
        }
      }
    },
    en: {
      title: 'Info',
      hero: {
        location: 'Location: Strijkviertel, Utrecht',
        address: 'Navigation address: Strijkviertelweg, Utrecht',
        date: 'Date & Opening hours:',
        hours: 'September 5 & 6, 2026 - 12:00 to 23:00'
      },
      transport: 'Transport',
      lockers: 'Lockers',
      faq: 'FAQ',
      sections: {
        bike: {
          title: 'Bike',
          text: 'There is a large bicycle parking area where you can park your bike for the entire day.'
        },
        car: {
          title: 'Car',
          text: 'You can purchase a parking ticket. Parking is available at P + R Papendorp, follow the signs for \'P online ticket\'. Did you not buy a ticket in advance? Then you can purchase a parking ticket from the attendant on site (PIN ONLY). Please note: capacity is limited.'
        },
        ov: {
          title: 'OV',
          text: 'Are you coming to Lief by public transport? Then plan your trip via 9292.nl.'
        },
        shuttle: {
          title: 'Shuttlebus',
          text: 'From Utrecht Central, you can take our free shuttle bus to the festival grounds. You will find this bus at the central station on Mineurslaan. Follow the white signs with black arrows and \'❤️U Festival\'. The bus runs towards the festival between 12:00PM and 7:00PM, and from 9:00PM onwards you can board again to go to the station.'
        },
        taxi: {
          title: 'Taxi + Kiss & Ride',
          text: 'Navigate to Strijkviertelweg, de Meern (Utrecht) Follow the signs "Kiss & Ride ❤️U Festival" as soon as you are near the festival grounds.'
        },
        lockers: {
          title: 'Lockers',
          text: 'Lockers are available on the festival grounds where you can safely store your belongings! They fit 3 to 4 jackets. Good to know: you can open and close your locker as often as you like throughout the day. It is not possible to reserve a locker online.'
        },
        medication: {
          title: 'I take medication. What now?',
          text: 'It is permitted to bring medication in a dose that is the maximum you need for one day. A doctor\'s certificate/medication passport is required. Security will review your documentation and check the medication. It is possible that First Aid will take your medication into safekeeping (for example, if it\'s dangerous in combination with alcohol) and that you can only take it at the First Aid.'
        },
        leave: {
          title: 'Am i allowed to leave the festival grounds temporarily?',
          text: 'No, unfortunately that is not possible. To ensure the safety of all visitors we cannot allow visitors to leave the festival grounds temporarily. After all, we have no insight what a visitor does outside the festival grounds or the state in which they re-enter. Therefore, no exceptions can be made. We have enough lounge areas, food stands, and bars to keep you going for a whole day.'
        },
        lockers2: {
          title: 'Are there lockers?',
          text: 'Yes, there are! You can rent medium and large lockers on the grounds.'
        },
        golden: {
          title: 'Golden-GLU',
          text: 'Studenten van het GLU hebben tijdens het festival speciale privileges en zijn herkenbaar aan een gouden armbandje. Met dit gouden armbandje kunnen ze gebruik maken van de gouden toiletten en met goud gemarkeerde bestelpunten aan de bars zonder in een rij te hoeven staan.'
        }
      }
    }
  }

  const [openFaq, setOpenFaq] = useState<string | null>(null)

  const faqItems = [
    { id: 'medication', icon: <FaPills /> },
    { id: 'leave', icon: <FaDoorOpen /> },
    { id: 'lockers2', icon: <FaBoxes /> }
  ]

  const t = translations[language as keyof typeof translations] || translations.en
  return (
    <div className="page infoscreen">

      <div className="info-content">
        <div className="info-section info-hero">
          <h1><img src="/src/assets/icons/heartfull.png" alt="Heart" className="heart-icon" /> U FESTIVAL</h1>
          <h3>{t.hero.location}</h3>
          <p>{t.hero.address}</p>
          <p>{t.hero.date}</p>
          <p>{t.hero.hours}</p>
        </div>

        <h2>{t.transport}</h2>

        <div className="info-section">
          <div className="section-icon"><FaBicycle /></div>
          <div className="section-text">
            <h4>{t.sections.bike.title}</h4>
            <p>{t.sections.bike.text}</p>
          </div>
        </div>

        <div className="info-section">
          <div className="section-icon"><FaCar /></div>
          <div className="section-text">
            <h4>{t.sections.car.title}</h4>
            <p>{t.sections.car.text}</p>
          </div>
        </div>

        <div className="info-section">
          <div className="section-icon"><FaTrain /></div>
          <div className="section-text">
            <h4>{t.sections.ov.title}</h4>
            <p>{t.sections.ov.text}</p>
          </div>
        </div>

        <div className="info-section">
          <div className="section-icon"><FaBus /></div>
          <div className="section-text">
            <h4>{t.sections.shuttle.title}</h4>
            <p>{t.sections.shuttle.text}</p>
          </div>
        </div>

        <div className="info-section">
          <div className="section-icon"><FaTaxi /></div>
          <div className="section-text">
            <h4>{t.sections.taxi.title}</h4>
            <p>{t.sections.taxi.text}</p>
          </div>
        </div>

        <h2>{t.lockers}</h2>

        <div className="info-section">
          <div className="section-icon"><FaLock /></div>
          <div className="section-text">
            <h4>{t.sections.lockers.title}</h4>
            <p>{t.sections.lockers.text}</p>
          </div>
        </div>

        <h2>{t.faq}</h2>

        {faqItems.map((item) => {
          const section = t.sections[item.id as keyof typeof t.sections]
          const isOpen = openFaq === item.id

          return (
            <div key={item.id} className={`info-section faq-item ${isOpen ? 'open' : ''}`}>
              <div className="section-icon">{item.icon}</div>
              <div className="section-text">
                <button
                  type="button"
                  className="faq-summary"
                  onClick={() => setOpenFaq(isOpen ? null : item.id)}
                >
                  <span>{section.title}</span>
                  <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
                </button>
                <div className={`faq-details ${isOpen ? 'open' : ''}`}>
                  <p>{section.text}</p>
                </div>
              </div>
            </div>
          )
        })}

        <div className="info-section info-golden">
          <div className="section-icon"><FaCrown /></div>
          <div className="section-text">
            <h4>{t.sections.golden.title}</h4>
            <p>{t.sections.golden.text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoScreen
