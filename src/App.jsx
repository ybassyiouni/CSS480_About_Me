import { useState } from 'react'
import './App.css'
import profilePic from './assets/hero.png'

function App() {
  const [games, setGames] = useState([
    'League of Legends',
    'Valorant',
    'Overwatch'
  ])

  const [sortOrder, setSortOrder] = useState('original')

  function sortGames() {
    if (sortOrder === 'original' || sortOrder === 'z-a') {
      const sorted = [...games].sort()
      setGames(sorted)
      setSortOrder('a-z')
    } else {
      const sorted = [...games].sort().reverse()
      setGames(sorted)
      setSortOrder('z-a')
    }
  }

  return (
    <div className="page">
      <header className="header">
        <h1>Welcome to Yousuf's Page</h1>
        <p className="subtitle">glad you stopped by!</p>
      </header>

      <section className="about-section">
        <div className="about-content">
          <img src={profilePic} alt="Yousuf" className="profile-pic" />
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hey! I'm Yousuf, a junior studying Computer Science at the University of Washington.
              I'm originally from Egypt, but I grew up in Silver Spring, Maryland and
              moved out here when I was 7. When I'm not coding, you can probably find me
              on a basketball court, a soccer field, or exploring a new coffee shop around Seattle.
            </p>
            <p>
              I'm big into music, mostly rap and R&B, and I enjoy doing movie nights with
              my friends and a bunch of snacks. My go-to snacks are chocolate chip cookies and brownies,
              but not brookies... mixing them together just doesn't work.
            </p>
          </div>
        </div>
      </section>

      <section className="interests-section">
        <h2>Things I Enjoy</h2>
        <ul className="interests-list">
          <li>Playing basketball and soccer</li>
          <li>Listening to rap and R&B</li>
          <li>Exploring new coffee shops</li>
          <li>Movie nights with friends</li>
          <li>Supporting local small brands</li>
          <li>Chocolate chip cookies & brownies (no brookies though)</li>
        </ul>
      </section>

      <section className="games-section">
        <h2>My Favorite Games</h2>
        <button onClick={sortGames} className="sort-btn">
          Sort {sortOrder === 'a-z' ? 'Z-A' : 'A-Z'}
        </button>
        <ol className="games-list">
          {games.map((game, index) => (
            <li key={index}>{game}</li>
          ))}
        </ol>
      </section>

      <footer className="footer">
        <p>Made by Yousuf | CSS 480 | Spring 2026</p>
      </footer>
    </div>
  )
}

export default App
