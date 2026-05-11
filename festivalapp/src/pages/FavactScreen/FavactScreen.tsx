import './FavactScreen.scss'

function FavactScreen() {
  const favoriteArtists = [
    { id: 1, name: 'Armin van Buuren', type: 'trance icon', time: 'Saturday 10:30 - 11:45', avatar: '' },
    { id: 2, name: 'Martin Garrix', type: 'EDM producer', time: 'Saturday 22:00 - 23:15', avatar: '' },
    { id: 3, name: 'Tiësto', type: 'dance legend', time: 'Sunday 21:00 - 22:30', avatar: '' },
    { id: 4, name: 'David Guetta', type: 'house master', time: 'Saturday 23:00 - 00:30', avatar: '' },
  ]

  return (
    <div className="page favactscreen">
      <h1>My favorites</h1>
      
      <div className="favorites-list">
        {favoriteArtists.map((artist) => (
          <div key={artist.id} className="favorite-item">
            <img src={artist.avatar} alt={artist.name} className="artist-avatar" />
            <div className="artist-info">
              <p className="artist-name">{artist.name}</p>
              <p className="artist-type">{artist.type}</p>
              <p className="artist-time">{artist.time}</p>
            </div>
            <button className="favorite-btn active"><img src="/src/assets/icons/heartfull.png" alt="Add to favorites" /></button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FavactScreen
